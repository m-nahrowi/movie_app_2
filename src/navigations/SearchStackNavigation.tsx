import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Genre from "../components/search/Genre";
import MovieDetail from "../components/movies/MovieDetail";
import Search from "../screens/Search";

const Stack = createNativeStackNavigator();

function SearchStackNavigation(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName="searching">
      <Stack.Screen
        name="searching"
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="movieDetail"
        component={MovieDetail}
        options={{ headerBackVisible: true, headerTitle: "Detail" }}
      />
      <Stack.Screen
        name="genre"
        component={Genre}
        options={{ headerBackVisible: true, headerTitle: "Search by Genre" }}
      />
    </Stack.Navigator>
  );
}

export default SearchStackNavigation;
