import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'native-base';

import { SelectPayment } from 'react-native-stripe-checkout';

class SelectPaymentScreen extends React.Component {
  static navigationOptions = {
    title: 'Select Payment Method',
    header: null
  };
  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <View>
        <Text style={{ marginTop: 80 }}> Select Payment Screen </Text>
        <Button block iconRight onPress={() => navigate('ConfirmScreen')}>
          <Text> Find Best Available </Text>
        </Button>
        <SelectPayment
          enableApplePay={true} // optional, default: false
          applePayHandler={() => console.log('apple pay happened')} // optional
          paymentSources={[
            { last4: '1234', brand: 'American Express', more: 'stuff' },
            { last4: '2345', brand: 'Visa', more: 'stuff' },
            { last4: '2345', brand: 'Master Card', more: 'stuff' }
          ]} // mandatory, See: [Customer Object](https://stripe.com/docs/api/node#customer_object) -> sources -> data for Stripe format.
          addCardHandler={() => console.log('Add Card Pressed!')}
          selectPaymentHandler={paymentSource => console.log(paymentSource)}
          styles={{}} // Override default styles
        />
      </View>
    );
  }
}

export default SelectPaymentScreen;
