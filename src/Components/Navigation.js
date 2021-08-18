import React from 'react';
import { Toolbar, 
		 Breadcrumbs,
		 withWidth,
		 Link
		 } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';		 

const Navigation = (props) => {
	
	const useStyle = makeStyles((theme) => ({
		
		root: {
			
			flexGrow: 1
			
		},
		
		toolbar: {
			
			display: 'flex'
			
		}
		
	}));

	const classes = useStyle();
	const { width } = props;

	
	return(
		<div className={classes.root}>
			<Toolbar className={classes.toolbar}>
				<Breadcrumbs classes={classes.breadcrumbs}>
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