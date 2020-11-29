import { HumidityReportList } from "./HumidityReportList";
import { Delay } from "./Delay";
import { WeatherReport } from "./WeatherReport";

let humidityReportList = new HumidityReportList();
let weatherReport = new WeatherReport();

//console.log(weatherReport.GetWeatherData());
//weatherReport.GetWeatherData();

//humidityReportList.GetAllReports();

(async () => { 
    while(true){
        console.log("Activated at " + new Date().getMinutes());
        humidityReportList.UpdateMainPageHumidity();
        weatherReport.GetWeatherData();

        let currentMinute:number = new Date().getMinutes();
        if(currentMinute % 15 == 0){
            humidityReportList.GetAllReports();
            //humidityReportList.FindLatestReport();
            humidityReportList.UpdateMainPageHumidity();
        }

        //One minute
        await Delay(60000);
    }
})();