import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../Constant/Metrics'
import AppButton from '../../components/Button/AppButton'
import CategoriesName from '../../components/card/CategoriesName'
import { useDispatch, useSelector } from 'react-redux'
import { getSubCat } from '../../redux/slice/SubCategorySlice'

export default function Categories({route, navigation }) {
  // console.log( route.params.id , "56565656565656565656565");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubCat())
  }, [])

  const SubCategoryData = useSelector(state => state.subcategory)

  // console.log("subbbbbbbbbb", SubCategoryData);
  // console.log("sSAAAAAAAAAAAAAAAAAA", SubCategoryData.SubCategory);

  const subCatFilter = SubCategoryData.SubCategory.filter((v)=> v.Category === route.params.id )

  return (
    <ScrollView>
      <View style={{ marginTop: verticalScale(20) }}>
        <AppButton
          titel="VIEW ALL ITEMS"
        />
      </View>
      <Text style={{ marginLeft: horizontalScale(20), marginTop: verticalScale(10) }}>Choose category</Text>
      <View style={{ marginTop: verticalScale(30), }}>

        {
          subCatFilter.map((v) => {
            return (
              <View>
                <CategoriesName
                  CategoriName={v.SubCategory}
                  onPress={() => navigation.navigate('ProductList' ,{id : v.id , cid : v.Category})}
                />
              </View>
            )
          })
        }
      </View>
    </ScrollView>
  )
}