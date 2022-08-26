import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      image: "image1.jpg",
      price: "2,095",
      title: "palm harbor",
      address: "2699 Green Valley,Highland Lake,FL",
      beds: 3,
      bathrooms: 2,
      area: "5*7",
      popular: true,
      fav: true,
      place: "florida",
      propertyType: "house",
      priceRange: "$500-$2500",
      when: "2022-08-30",
    },
    {
      id: 2,
      image: "image2.jpg",
      price: "2,700",
      title: "beverly springfield",
      address: "2821 Lake Sevilla,Palm Harbour,TX",
      beds: 4,
      bathrooms: 2,
      area: "6*7.5",
      popular: true,
      fav: false,
      place: "texas",
      propertyType: "apartment",
      priceRange: "$2500-$5000",
      when: "2022-09-01",
    },
    {
      id: 3,
      image: "image3.jpg",
      price: "4,550",
      title: "faulkner ave",
      address: "909 Woodland St,Michigan,IN",
      beds: 4,
      bathrooms: 3,
      area: "8*10",
      popular: false,
      fav: false,
      place: "indiana",
      propertyType: "apartment",
      priceRange: "$2500-$5000",
      when: "2022-08-29",
    },
    {
      id: 4,
      image: "image4.jpg",
      price: "3,546",
      title: "pearl harbor",
      address: "8751 ,Lowland Lake,MT",
      beds: 5,
      bathrooms: 4,
      area: "11*13",
      popular: true,
      fav: false,
      place: "montana",
      propertyType: "house",
      priceRange: "$2500-$5000",
      when: "2022-08-29",
    },
    {
      id: 5,
      image: "image5.jpg",
      price: "1,095",
      title: "Kings place",
      address: "2999 Air St,Manhatten,NY",
      beds: 3,
      bathrooms: 2,
      area: "5*7",
      popular: false,
      fav: true,
      place: "new york",
      propertyType: "apartment",
      priceRange: "$500-$2500",
      when: "2022-08-30",
    },
    {
      id: 6,
      image: "image6.jpg",
      price: "2,095",
      title: "Maple leavesland",
      address: "7845 White Valley,Noland Lake,AZ",
      beds: 3,
      bathrooms: 3,
      area: "7*9",
      popular: false,
      fav: true,
      place: "new york",
      propertyType: "house",
      priceRange: "$500-$2500",
      when: "2022-08-28",
    },
  ],
  properties: [
    {
      id: 1,
      image: "image1.jpg",
      price: "2,095",
      title: "palm harbor",
      address: "2699 Green Valley,Highland Lake,FL",
      beds: 3,
      bathrooms: 2,
      area: "5*7",
      popular: true,
      fav: true,
      place: "florida",
      propertyType: "house",
      priceRange: "$500-$2500",
      when: "2022-08-30",
    },
    {
      id: 2,
      image: "image2.jpg",
      price: "2,700",
      title: "beverly springfield",
      address: "2821 Lake Sevilla,Palm Harbour,TX",
      beds: 4,
      bathrooms: 2,
      area: "6*7.5",
      popular: true,
      fav: false,
      place: "texas",
      propertyType: "apartment",
      priceRange: "$2500-$5000",
      when: "2022-09-01",
    },
    {
      id: 3,
      image: "image3.jpg",
      price: "4,550",
      title: "faulkner ave",
      address: "909 Woodland St,Michigan,IN",
      beds: 4,
      bathrooms: 3,
      area: "8*10",
      popular: false,
      fav: false,
      place: "indiana",
      propertyType: "apartment",
      priceRange: "$2500-$5000",
      when: "2022-08-29",
    },
    {
      id: 4,
      image: "image4.jpg",
      price: "3,546",
      title: "pearl harbor",
      address: "8751 ,Lowland Lake,MT",
      beds: 5,
      bathrooms: 4,
      area: "11*13",
      popular: true,
      fav: false,
      place: "montana",
      propertyType: "house",
      priceRange: "$2500-$5000",
      when: "2022-08-29",
    },
    {
      id: 5,
      image: "image5.jpg",
      price: "1,095",
      title: "Kings place",
      address: "2999 Air St,Manhatten,NY",
      beds: 3,
      bathrooms: 2,
      area: "5*7",
      popular: false,
      fav: true,
      place: "new york",
      propertyType: "apartment",
      priceRange: "$500-$2500",
      when: "2022-08-30",
    },
    {
      id: 6,
      image: "image6.jpg",
      price: "2,095",
      title: "Maple leavesland",
      address: "7845 White Valley,Noland Lake,AZ",
      beds: 3,
      bathrooms: 3,
      area: "7*9",
      popular: false,
      fav: true,
      place: "new york",
      propertyType: "house",
      priceRange: "$500-$2500",
      when: "2022-08-28",
    },
  ],
  favs: [],
  favsUpdate: false,
};

export const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    switchFav: (state, action) => {
      let newArray1 = state.properties.map((value, key) => {
        if (action.payload === value.id) {
          return { ...value, fav: !value.fav };
        } else {
          return { ...value };
        }
      });
      let newArray2 = state.favs.map((value, key) => {
        if (action.payload === value.id) {
          return { ...value, fav: !value.fav };
        } else {
          return { ...value };
        }
      });

      state.properties = [...newArray1];
      state.favs = [...newArray2];
      state.favsUpdate = !state.favsUpdate;
    },
    getFavs: (state) => {
      let newArray = state.properties.filter((val) => val.fav === true);
      state.favs = [...newArray];
    },
    filterData: (state, action) => {
      state.properties = state.data;
      const { price, place, property, date } = action.payload;
      const checkPrice = state.properties.filter(
        (val) => val.priceRange === price.toLowerCase()
      );
      const checkPlace = checkPrice.filter(
        (val) => val.place === place.toLowerCase()
      );
      const checkPropertyType = checkPlace.filter(
        (val) => val.propertyType === property.toLowerCase()
      );
      const checkWhen = checkPropertyType.filter(
        (val) => val.when === date.toLowerCase()
      );
      state.properties = checkWhen;
    },
  },
});

export const { switchFav, getFavs, filterData } = propertySlice.actions;

export const selectProperties = (state) => state.property.properties;
export const selectFavs = (state) => state.property.favs;

export default propertySlice.reducer;
