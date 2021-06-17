/* -------------------------------------------------------------------------- */
/*                            About DashboardStyles                           */
// This file holds the JSS style overrides for the Dashboard Component
// JS is used to describe CSS rules that will be applied to the Dashboard elements through the withStyles hook
//TODO - Separation of concerns: The styling for the UserPanel component are also in this file, because I built them side by side. Now I realize they're two separate entities. Move the styles for UserPanel to the UserPanel directory, filename: UserPanelStyles.js
/* -------------------------------------------------------------------------- */

const styles = (theme) => ({
  // root describes parent Container (material UI component)
  root: {
    height: '100vh',
    width: '100%',
    marginTop: theme.spacing(2),
    margin: '0 auto',
    display: 'flex',
  },
  box: {
    width: '100%',
  },
});

export default styles;
