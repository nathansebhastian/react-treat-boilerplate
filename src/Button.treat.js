import { style } from 'treat';

export const Button = style({
  cursor: 'pointer',
  backgroundColor: 'blue',
  marginLeft: 10,
  height: 28,
  color: 'white',
  borderRadius: 4,
  borderWidth: 0,
  padding: '0 15px',
  ':hover': {
    backgroundColor: 'green'
  },
});
