/** @jsx jsx */

import {jsx} from 'theme-ui';
import {Text} from 'theme-ui';

export default function Heading1(props) {
  return (
    <Text
      variant="h1"
      sx={{
        mb: '24px',
        display: 'block',
        lineHeight: 'normal',
        fontSize: '48px',
        letterSpacing: '0.3px',
        fontWeight: '500',
        fontFamily: 'heading',
        color: 'text',
        marginTop: '18px',
        marginBottom: '32px'
      }}
      {...props}
    />
  );
}
