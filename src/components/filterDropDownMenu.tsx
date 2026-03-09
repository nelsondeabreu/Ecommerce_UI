import { Check, ChevronDown } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Animated,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type SortOption = {
  label: string;
  value: string;
};

type FilterDropdownProps = {
  options: SortOption[];
  selectedValue: string;
  onSelect: (value: string) => void;
  placeholder?: string;
};

export const FilterDropdown = ({
  options,
  selectedValue,
  onSelect,
  placeholder = "Sort By",
}: FilterDropdownProps) => {

  const [visible, setVisible] = useState(false);
  const animation = useState(new Animated.Value(0))[0];

  const selectedOption = options.find(opt => opt.value === selectedValue);

  const openDropdown = () => {
    setVisible(true);

    Animated.timing(animation, {
      toValue: 1,
      duration: 180,
      useNativeDriver: true,
    }).start();
  };

  const closeDropdown = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      setVisible(false);
    });
  };

  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0.95, 1],
  });

  const opacity = animation;

  return (
    <View>

      <Pressable style={styles.trigger} onPress={openDropdown}>
        <Text style={styles.triggerText} numberOfLines={1}>
          {selectedOption ? selectedOption.label : placeholder}
        </Text>

        <ChevronDown size={20} color="#666" />
      </Pressable>

      <Modal
        transparent
        visible={visible}
        animationType="none"
        onRequestClose={closeDropdown}
      >
        <Pressable style={styles.overlay} onPress={closeDropdown}>

          <Animated.View
            style={[
              styles.dropdown,
              {
                opacity,
                transform: [{ scale }],
              },
            ]}
          >
            {options.map((option) => (
              <Pressable
                key={option.value}
                style={styles.option}
                onPress={() => {
                  onSelect(option.value);
                  closeDropdown();
                }}
              >
                <Text style={styles.optionText}>{option.label}</Text>

                {selectedValue === option.value && (
                  <Check size={22} color="#000" strokeWidth={3} />
                )}
              </Pressable>
            ))}
          </Animated.View>

        </Pressable>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({

  trigger: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },

  triggerText: {
    fontSize: 15.5,
    color: '#222',
    fontWeight: '600',
  },

  overlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 120,
    paddingRight: 20,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },

  dropdown: {
    backgroundColor: '#fff',
    borderRadius: 16,
    width: 260,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 25,
    elevation: 25,

    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },

  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 22,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },

  optionText: {
    fontSize: 16.5,
    color: '#222',
    fontWeight: '500',
  },

});