import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { List, Box, Divider } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RedditIcon from '@material-ui/icons/Reddit';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import Icon from '@material-ui/core/Icon';
import GitHubIcon from '@material-ui/icons/GitHub';
import ListSubheader from '@material-ui/core/ListSubheader';
import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme) => ({
	
	root:{
		[theme.breakpoints.only('xs')]:{
		paddingTop: '50px',
		fontSize: '10px',
		alignText: 'left',
		alignItems: 'center',
		marginLeft: '25%',
		marginTop: '10vh'
		},
		[theme.breakpoints.between('sm', 'xl')]:{
			
		paddingTop: '50px',
		fontSize: '10px',
		alignText: 'left',
		alignItems: 'center',
		marginLeft: '35%',
		marginTop: '10vh'
			
		}
	},
	

	
	  imageIcon: {
    display: 'flex',
    height: 'inherit',
    width: 'inherit'
  },
  iconRoot: {
    textAlign: 'center'
  },
	
	footGrid: {
		
		[theme.breakpoints.only('xs')]: {
			
  display: 'flex',
  flexDirection: 'column',
   textAlign: 'left',
			
		},
		[theme.breakpoints.between('sm', 'xl')]: {
			
  display: 'flex',
  flexDirection: 'row',

			
		}
		
	}
	
}))

const Footer = () => {
	
	const classes = useStyles();
	return (<>
	<Divider />
	<Box className={classes.root}>
		<Box className={classes.footGrid}>
		<List
		
		aria-labelledby="nested-list-subheader"
		subheader={
        <ListSubheader component="div" id="Social">
          Social
        </ListSubheader>
		}
		
		>
			<ListItem button>
				<ListItemIcon onClick={() => {window.open('https://t.me/burgossrodrigo');}}>
					<TelegramIcon  classes={{root: classes.iconRoot}} />
				</ListItemIcon>	
				<ListItemText primary="Telegram" />
			</ListItem>
			
			<ListItem button>
				<ListItemIcon onClick={() => {window.open('https://www.reddit.com/r/SethNFT');}} >
					<RedditIcon  classes={{root: classes.iconRoot}} />
				</ListItemIcon>	
				<ListItemText primary="Reddit" />
			</ListItem>
			
				
			<ListItem button>
				<ListItemIcon onClick={() => {window.open('https://twitter.com/rurgos');}}>
					<TwitterIcon  classes={{root: classes.iconRoot}} />
				</ListItemIcon>	
				<ListItemText primary="Twitter" />
			</ListItem>

			<ListItem button>
				<ListItemIcon onClick={() => {window.open('https://api.whatsapp.com/send?phone=5571993502380');}}>
					<WhatsAppIcon  classes={{root: classes.iconRoot}} />
				</ListItemIcon>	
				<ListItemText primary="WhatsApp" />
			</ListItem>		

		</List>

		<List
		
		mr='55px'
		aria-labelledby="nested-list-subheader"
		subheader={
        <ListSubheader component="div" id="Social">
			Development
        </ListSubheader>
		}>
			<ListItem button>
				<ListItemIcon>
					<Icon classes={{root: classes.iconRoot}}>
					  <img className={classes.imageIcon} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png"/>
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="Stack Overflow" />
			</ListItem>
			
			<ListItem button>
				<ListItemIcon>
					<Icon classes={{root: classes.iconRoot}}>
					  <img className={classes.imageIcon} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEX///8eU5eR2PRMoto3bbaL1vTU7/ry9fkASJO11e7M4vPi6fNBntgeYbEuaLSDn8zz+/6pts+hss7f5fEAQo/j6fHq9/0OT5YARJCq4Pbi9Pyc3PX4/P4AQI+8yNuLoMJgf69yjLfD6fm45fiz4/ek3vYumNYAVawAN4sxX55TdKh6k7uDmb7CzN5GbaWRpcbS2ucrXJwFrol4AAADJElEQVR4nO3d21raQBhG4SEtMq3aCkYTxICgtnVX6f3fXAELpBTQR/nmH6drHXOQ1+wmMxGcIyIiIiIiIiIiIiIiIqIwHemzw52NulkzRL2rkQHz6HKiywI1VY4C+67D8RbKkMZRcN/MmJ0G8h31LHwzY5jdeGrlmxKvAgDPDIETYlcOtNyDM+KlGHhuDJwQ97TCrrkwa0rv/nv2wKx5rRRGANQep6MohFlPJ4wDmDXPVMAYzsJZspvitbVsXvNcA7S/F85TXWtsx2v1VAObSK6k00RX0661a1lTI+xZu5aJRm7WrFr/gVAzn2HNqoUQIUL7EL6yIKswL0wj3Iso0eMTERHRs32KKM0T8EE8fduXCD/E0wFChAjNQ4gQoX0IESK0DyFChPYhRIjQPoQIEdqH8JVZT+XXEs3qf46olkRIRET0fPsRpXlz7zCevh9LhF8+RtMhQoQIzUOIEKF9CBEitA8hQoT2IUSI0D6ECBHah/C1wngSCb9G1IlESERE9HytmJIISx9PPyS3/KIRTzlChAjNQ4hwfdaqehrhjTWrViV5/fI2psNUAXR38QiLnxJh21vDFhX3EuFxbg1b5PsSYUQX01z0f0+DWE7E4kIDdCeVNe1P+YNI6C7i2InFjQrojuPYibnoOjNtGMNOFN0Mn2rFICylyzIP9sdp3lYCnXssjYF+qAVORqe2RH+hBk6IloO3MgDQuY7duVgNQgCdGzdsnjJ8IRvLrHb+WIU3FtV9yO8ZaA2KMuS9sSj9ffC3Ex6GDf/GxZrtf6PFx0rfGPZtftGiNe6339K2QWDRmH+qP36/34LR2XI2+yRemdki9Jq3nkK3WVimAdwszMfWm7ajNgmTAW4SVskANwh180zhWyushLMwwVsnTAq4TpgWcI2wEk/ChO4fYdWx3qQdtyqsHq23aNetCPPkgCvCMtAkTMj+EpaadV3b6kJ/Z701impC/VS2SUthosClMMRcvUlzYbLAudDfWm+IrCdhkS7wSShdtLZuKkwaOBUWN0n/AHXHJw50nfLX+12SeFEdnzjQtZNYfSEiIiIiIiIi2km/AShYBe6XNXI7AAAAAElFTkSuQmCC"/>
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="Stack Exchange" />
			</ListItem>

			<ListItem button>
				<ListItemIcon>
					<Icon classes={{root: classes.iconRoot}}>
					  <img className={classes.imageIcon} src="https://w7.pngwing.com/pngs/435/424/png-transparent-github-computer-icons-source-code-github.png"/>
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="GitHub" />
			</ListItem>				
			
		</List>		
		</Box>
	</Box>
	</>
)};

Footer.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
  };

export default withWidth()(Footer);