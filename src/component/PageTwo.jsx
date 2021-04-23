/** @format */

import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	Paper,
	TableRow,
	Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});
function PageTwo(props) {
	console.log(">>>>>>", props);
	const classes = useStyles();

	return (
		<div>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="center">Name</TableCell>
							<TableCell align="center">Email</TableCell>
							<TableCell align="center">Contact</TableCell>
							<TableCell align="center">Back</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell align="center">{props.name}</TableCell>
							<TableCell align="center">{props.email}</TableCell>
							<TableCell align="center">{props.contact}</TableCell>
							<TableCell align="center">
								<Button variant="contained" color="secondary">
									<Link to="/" style={styles.button}>
										Back
									</Link>
								</Button>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}
const styles = {
	button: {
		textDecoration: "none",
		color: "white",
		padding: 5,
	},
};
const mapStateToProp = (response) => {
	return response;
};
export default connect(mapStateToProp, null)(PageTwo);
