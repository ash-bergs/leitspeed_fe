import React from 'react';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
} from '@material-ui/core';

import { withStyles } from '@material-ui/styles';
import styles from './UserPanelStyles';
import SubHeader from '../../layoutComponents/SubHeader';

const UserPanel = ({ classes, decks }) => {
  const renderedItems = decks.map((deck, index) => {
    return (
      <FormControlLabel
        key={deck.id}
        value={deck.name}
        control={<Radio />}
        label={deck.name}
      />
    );
  });

  return (
    <Paper className={classes.root} elevation={3} variant="outlined">
      <SubHeader options={{ variant: 'h6', component: 'h4' }}>
        User Controls
      </SubHeader>

      {/* Box to update currently rendered cards in Cards component - still need to get this hooked up! */}
      <Box
        style={{
          backgroundColor: '#13141B',
          color: 'white',
          borderRadius: '5px',
        }}
      >
        <FormControl component="fieldset">
          <FormLabel component="legend">Your Decks</FormLabel>
          <RadioGroup name="decks" aria-label="decks">
            {renderedItems}
          </RadioGroup>
        </FormControl>
      </Box>
    </Paper>
  );
};

export default withStyles(styles)(UserPanel);
