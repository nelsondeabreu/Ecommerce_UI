import { CategoryCircles } from "@/components/categoryCircles";
import { Header } from "@/components/Header/header";
import { SearchInput } from "@/components/Input/search";
import { ProductCard } from "@/components/ProductCard/productCard";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FilterDropdown } from '../../components/filterDropDownMenu';

const sortOptions = [
  { label: "Sort By", value: " " },
  { label: "Nome (A-Z)", value: "name-asc" },
  { label: "Nome (Z-A)", value: "name-desc" },
  { label: "Cor (A-Z)", value: "color-asc" },
  { label: "Preço: Menor ao Maior", value: "price-asc" },
  { label: "Preço: Maior ao Menor", value: "price-desc" },
  { label: "Mais Recente", value: "date-desc" },
];
const categories = [
  {
    label: "Women",
    image: "https://i.imgur.com/1.jpg",
  },
  {
    label: "Men",
    image: "https://i.imgur.com/2.jpg",
  },
  {
    label: "Kids",
    image: "https://i.imgur.com/3.jpg",
  },
  {
    label: "Footwear",
    image: "https://i.imgur.com/4.jpg",
  },
  {
    label: "Children",
    image: "https://i.imgur.com/4.jpg",
  },
];

export default function Home() {
  const [sortBy, setSortBy] = useState("name-asc");
  const [search, setSearch] = useState("");

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <SafeAreaView style={{ flex: 1, padding: 20 }}>
          <Header />

          <View style={styles.headerSection}>
            <Text style={styles.discoverText}>Discover</Text>
            <Text>
              <FilterDropdown
                options={sortOptions}
                selectedValue={sortBy}
                onSelect={setSortBy}
              />
            </Text>
          </View>

          <View>
            <Text>
              Explore Our <Text style={styles.newCollectionText}>New</Text> Collection
            </Text>
            <CategoryCircles
              categories={categories}
              onSelect={(category) => console.log(category)}
            />
            <SearchInput
              value={search}
              onChangeText={setSearch}
              onPressSettings={() => console.log("open filters")}
            />
            <ProductCard
              image={require('../../../assets/images/vestido_azul.png')}
              name="BerryLush"
              price="$120"
              rating={4.5}
            />
            <ProductCard
              image={require('../../../assets/images/vestido_azul.png')}
              name="BerryLush"
              price="$120"
              rating={4.5}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    marginTop: 4,

  },
  discoverText: {
    fontSize: 32,
    fontWeight: "700",
    color: "#111",
    letterSpacing: -0.8,
  },
  newCollectionText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#111",
  },
});

