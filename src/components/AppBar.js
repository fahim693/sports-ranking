import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const AppBar = (props) => (
    <Appbar style={styles.appbar}>
        <Text style={styles.title}>{props.title}</Text>
        <Entypo name="dots-three-vertical" size={20} color="white" />
    </Appbar>
);

export default AppBar;

const styles = StyleSheet.create({
    appbar: {
        justifyContent: 'space-between',
        paddingLeft: 18,
        paddingRight: 18,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
});