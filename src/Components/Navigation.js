import React from 'react';
import { Toolbar, 
		 Breadcrumbs,
		 withWidth,
		 Link,
		 Typography,
		 AppBar,
		 Box,
		 TextField,
		 Button,
		 IconButton
		 } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';		 

const Navigation = (props) => {
	
	const useStyle = makeStyles((theme) => ({
		
		root: {
			
		flexGrow: 1,
		backgroundColor: '#cebde2',
		color: '#ddd9ce'

			
		},
		
		title: {
			
		flexGrow: 1,
		
		},
		
		menu: {
			
			[theme.breakpoints.only('xs')]:{
				
				marginLeft: '45vw',
				position: 'relative'
				
			},
			[theme.breakpoints.between('sm', 'xl')]:{
				
				display: 'none'
				
			}
			
		},
		
		form: {
			
			[theme.breakpoints.only('xs')]:{display: 'none'},
			[theme.breakpoints.between('sm', 'xl')]:{display: 'flex', flexDirection: 'row', margin: theme.spacing(2)}
			
		},
		
		button: {
			
			marginLeft: '1vw',
			height: '5vw'
			
		},
		
		toolbar: {
			
	[theme.breakpoints.only('xs')]: {marginRight: theme.spacing(2)},
	 [theme.breakpoints.between('sm', 'xl')]: {}
			
		},
		
		breadcrumbs: {
			
	[theme.breakpoints.only('xs')]: {
			
		display: 'none'
	  
				  
	  },
	 [theme.breakpoints.between('sm', 'xl')]: {

		display: 'flex',
		flexDirection: 'row',
		float: 'right',
		fontSize: '30px',
		marginLeft: '23vw'
				  
	}
			
		}
		
	}));

	const classes = useStyle();
	const { width } = props;

	
	return(
		<Box className={classes.root}>
			<Toolbar variant="dense" className={classes.toolbar}>
				<Typography style={{width: '25vw'}} variant='h4' color="primary">Rodrigo Burgos</Typography>
				<Breadcrumbs color="secundary" separator="   " className={classes.breadcrumbs}>
					<Link>
						About
					</Link>
					<Link>
						Work
					</Link>
				</Breadcrumbs>
				<form className={classes.form} color="secundary" noValidate autoComplete="off">
					<TextField color="secundary" id="outlined-basic" label="email here" variant="outlined" />
					<Button style={{height: '9vh', marginLeft: '1vw'}}variant="contained" color="secondary">
					  Contact
					</Button>
				</form>	
						<IconButton className={classes.menu}>
							<MenuIcon color='white' fontSize="large" color="secondary" />
						</IconButton>				
			</Toolbar>	
		</Box>
	);

}

export default withWidth()(Navigation);