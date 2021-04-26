/** @format */
import { FORMDATA } from "./type";
const ApiKey ='a21e2ca3f7d978a2e50f0499735296d5';

export const reqWeatherData = (search,context) =>(dispatch)=> {
	fetch(`http://api.openweathermap.org/data/2.5/weather?&units=metric&q=${search}&appid=${ApiKey}
	`).then(res => {
		return res.json()
	}).then(resRes => {
		console.log("resRes" ,resRes)
		if(resRes.cod === 200){
			context.handleResponse(resRes)
			dispatch({
				type: FORMDATA,
				payload: resRes,
			})
		}else{
			context.handleResponse(resRes);
			dispatch({
				type: FORMDATA,
				payload: "",
			})
		}
		
	}).catch(err => {
		console.log("err" ,err)
	})
		
		

};
