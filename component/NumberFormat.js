import React from 'react';

import NumberFormat from 'react-number-format';

import {Text} from 'react-native';

const ReactNativeNumberFormat = ({value, namestyles, attr = ''}) => {
  return (
    <NumberFormat
      value={value}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'Rp '}
      renderText={formattedValue => (
        <Text style={namestyles}>
          {attr}
          {formattedValue}
        </Text>
      )}
    />
  );
};

export default ReactNativeNumberFormat;
