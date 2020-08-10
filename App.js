import React from 'react';
import { View, Platform, StatusBar } from 'react-native';
import FifaRanking from './src/views/FifaRanking';
import { BottomNavigation, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import IccRanking from './src/views/IccRanking';
import AppBar from './src/components/AppBar';
import TennisRanking from './src/views/TennisRanking';
import NbaRanking from './src/views/NbaRanking';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#212121',
    accent: '#f1c40f',
  },
};

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'fifa', title: 'FIFA', icon: 'soccer' },
    { key: 'cricket', title: 'Cricket', icon: 'cricket' },
    { key: 'tennis', title: 'Tennis', icon: 'tennis' },
    { key: 'nba', title: 'NBA', icon: 'basketball' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    fifa: FifaRanking,
    cricket: IccRanking,
    tennis: TennisRanking,
    nba: NbaRanking,
  });
  return (
    <View style={{ flex: 1, backgroundColor: '#fafafa' }}>
      <PaperProvider theme={theme}>
        <StatusBar backgroundColor="#000" barStyle='default' />
        <AppBar
          title={routes[index].title}
        />
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          shifting={false}
        />
      </PaperProvider>
    </View>
  );
}
