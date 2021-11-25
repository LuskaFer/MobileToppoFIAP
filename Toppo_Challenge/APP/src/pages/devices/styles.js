import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },

    headerTextBold:{
        fontWeight: 'bold',
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },

    title: {

        fontSize: 30,
        marginTop: 48,
        marginBottom: 16,
        color: '#13131a',
        fontWeight: 'bold',
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380',
   
    },

    deviceList:{
        marginTop: 32,

    },

    device: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,   
    },

    deviceProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',        
    },
    deviceValue:{
        marginTop: 8,
        fontSize: 15,
        color: '#737380',
        marginBottom: 24,
    },

    detailsButton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },

    detailsButtonText: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold',
    },
});