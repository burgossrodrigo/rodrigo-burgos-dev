import React from 'react';
import { Toolbar, 
		 Breadcrumbs,
		 withWidth,
		 Link,
		 Typography,
		 AppBar,
		 Box,
		 TextField,
		 Button
		 } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';		 

const Navigation = (props) => {
	
	const useStyle = makeStyles((theme) => ({
		
		root: {
			
		flexGrow: 1,

			
		},
		
		title: {
			
		flexGrow: 1,
		
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
				<Typography style={{width: '25vw'}} variant='h4'>Rodrigo Burgos</Typography>
				<Breadcrumbs separator="   " className={classes.breadcrumbs}>
					<Link>
						About
					</Link>
					<Link>
						Work
					</Link>
				</Breadcrumbs>
				<form className={classes.form} noValidate autoComplete="off">
					<TextField id="outlined-basic" label="email here" variant="outlined" />
					<Button style={{height: '9vh', marginLeft: '1vw'}}variant="contained" color="primary">
					  Contact
					</Button>
				</form>	
				
			</Toolbar>	
		</Box>
	);

}

export default withWidth()(Navigation);