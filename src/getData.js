import { useState, useEffect } from "react";

function getData(SERVER_URL, data, error) {
  const [sensorData, setSensorData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  

  const handleSensorData = (data) => {
    let newSelectedOption;
    setSensorData(data); //actualizo el objeto data
    if (data.value >= 50 && data.value <= 70) {
      newSelectedOption = (selectedOption + 1) % actions.length;
    } else {
      newSelectedOption = selectedOption;
    }
    setSelectedOption(newSelectedOption);
  };

  useEffect(() => {
    console.log("Selected option updated to: ", selectedOption);
    lastSelectedOption.current = selectedOption;
  }, [selectedOption]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(true);
      fetch(`${SERVER_URL}/datos`)
        .then((response) => response.json())
        .then((data) => {
          setIsLoading(false);
          handleSensorData(data);
        })
        .catch((error) => console.error(error));
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [handleSensorData]);
  return { data, error };

  
}

export default getData;
