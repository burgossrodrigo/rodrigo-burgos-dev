import React from 'react';
import { Toolbar, 
		 Breadcrumbs,
		 withWidth,
		 Link,
		 Typography
		 } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';		 

const Navigation = (props) => {
	
	const useStyle = makeStyles((theme) => ({
		
		root: {
			
		
			
		},
		
		title: {
			
		float: 'left',
		marginRight: '65%',
		flexGrow: 1
		
			
		},
		
		toolbar: {
			
	[theme.breakpoints.only('xs')]: {
			
		display: 'flex',
		flexDirection: 'row',
		flexGrow: 1	
				  
	  },
	 [theme.breakpoints.between('sm', 'xl')]: {

		display: 'flex',
		flexDirection: 'row',
		fontSize: '20vw',
				  
	}
			
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
				  
	}
			
		}
		
	}));

	const classes = useStyle();
	const { width } = props;

	
	return(
		<div className={classes.root}>
			<Toolbar className={classes.toolbar}>
				<Typography className={classes.title} variant='h4'>Rodrigo Burgos</Typography>
				<Breadcrumbs className={classes.breadcrumbs}>
					<Link>
						About
					</Link>
					<Link>
						Work
					</Link>				
				</Breadcrumbs>
			</Toolbar>	
		</div>
	);

}

export default withWidth()(Navigation);