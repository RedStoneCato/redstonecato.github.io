async function SuseyIPGrabber(){
    document.getElementById("amongus").innerHTML = "rocksolidsuseyfatcatsucker"
    const reg = await fetch("https://api.open-meteo.com/v1/forecast?latitude=45.4235&longitude=-75.6979&hourly=soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm,soil_temperature_54cm,soil_moisture_0_1cm,soil_moisture_1_3cm,soil_moisture_3_9cm,soil_moisture_9_27cm,soil_moisture_27_81cm")
    const json = await reg.json()
    const soilcrapandprap = json.hourly.soil_temperature_18cm
    document.getElementById("amongus").innerHTML = JSON.stringify(soilcrapandprap)
    //https://api.open-meteo.com/v1/forecast?latitude=45.4235&longitude=-75.6979&hourly=soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm,soil_temperature_54cm,soil_moisture_0_1cm,soil_moisture_1_3cm,soil_moisture_3_9cm,soil_moisture_9_27cm,soil_moisture_27_81cm

}