 const feedDisplay = document.querySelector("#data")
      
        const d = new Date();

        const yr25 = 'https://corsproxy.io/?' + encodeURIComponent('https://www.omip.pt/en/javali/get_chart/FPBYR-25/0/0/0/1');
        const yr25France = 'https://corsproxy.io/?' + encodeURIComponent('https://www.omip.pt/pt/javali/get_chart/FFBYR-25/0/0/0/1');
        const yr25Germany = 'https://corsproxy.io/?' + encodeURIComponent('https://www.omip.pt/pt/javali/get_chart/FDBYR-25/0/0/0/1');
        const yr26 = 'https://corsproxy.io/?' + encodeURIComponent('https://www.omip.pt/en/javali/get_chart/FPBYR-26/0/0/0/1');
        const yr27 = 'https://corsproxy.io/?' + encodeURIComponent('https://www.omip.pt/en/javali/get_chart/FPBYR-27/0/0/0/1');
        const yr29 = 'https://corsproxy.io/?' + encodeURIComponent('https://www.omip.pt/en/javali/get_chart/FPBYR-29/0/0/0/1');

        const quarter1_24 = 'https://corsproxy.io/?' + encodeURIComponent('https://www.omip.pt/en/javali/get_chart/FPBQ1-24/0/0/0/1');
        const quarter2_24 = 'https://corsproxy.io/?' + encodeURIComponent('https://www.omip.pt/en/javali/get_chart/FPBQ2-24/0/0/0/1');
        const quarter3_24 = 'https://corsproxy.io/?' + encodeURIComponent('https://www.omip.pt/en/javali/get_chart/FPBQ3-24/0/0/0/1');
        const quarter4_24 = 'https://corsproxy.io/?' + encodeURIComponent('https://www.omip.pt/en/javali/get_chart/FPBQ4-24/0/0/0/1');

        const mar24 =  'https://corsproxy.io/?' + encodeURIComponent('https://www.omip.pt/pt/javali/get_chart/FPBMMAR-24/0/0/0/1');	
        const apr24 =  'https://corsproxy.io/?' + encodeURIComponent('https://www.omip.pt/pt/javali/get_chart/FPBMAPR-24/0/0/0/1');
        const may24 =  'https://corsproxy.io/?' + encodeURIComponent('https://www.omip.pt/pt/javali/get_chart/FPBMMAY-24/0/0/0/1');
        const jun24 =  'https://corsproxy.io/?' + encodeURIComponent('https://www.omip.pt/pt/javali/get_chart/FPBMJUN-24/0/0/0/1');
        const jul24 =  'https://corsproxy.io/?' + encodeURIComponent('https://www.omip.pt/pt/javali/get_chart/FPBMJUL-24/0/0/0/1');
        const agu24 =  'https://corsproxy.io/?' + encodeURIComponent('https://www.omip.pt/pt/javali/get_chart/FPBMAUG-24/0/0/0/1');
        
            fetch(yr25)
            .then(function(response) {
                // When the page is loaded convert it to text
                return response.text()
            })
            .then(function(html) {
                // Initialize the DOM parser
                var parser = new DOMParser();
                // Parse the text
                var doc = parser.parseFromString(html, "text/html");
                feedDisplay.insertAdjacentHTML("beforeend", html)

                var dataChartAttr = doc.querySelector('.charts-highchart.chart').getAttribute('data-chart');
                var data = JSON.parse(dataChartAttr);
                var seriesData = data.series[0].data;

                // Convert timestamps in the data array
                var formattedDataArray = seriesData.map(function(item) {
                    return [formatDate(item[0]), item[1]];
                });

                console.log(formattedDataArray)

                ///dividing the data 
                var datesOnly = formattedDataArray.map(function(item) {
                    return formatDate(new Date(item[0])); // Extract only the date
                });
                
                var valuesOnly = formattedDataArray.map(function(item) {
                    return item[1]; // Extract only the date
                });
                
                //console.log(seriesData);
                //values fetch date 
                var titleChart = data.title.text;
                console.log(titleChart)
                document.getElementById("demo").innerHTML = titleChart;

           
                new Chart('myCanvas', {
                    type: 'line',
                    data: {
                        //labels: datesOnly,
                        datasets: [{
                            data: seriesData, 
                            borderColor: "green", 
                            fill: false
                            }]
                    },
                    options: {
                    scales: {
                                x: {
                                    type: 'time',
                                    time: {
                                        unit: 'day' // You can adjust this based on your data granularity
                                    }
                                }
                            }
                    }
                });

                var Results = formattedDataArray;
                exportToCsv = function() {
                    var CsvString = "";
                    Results.forEach(function(RowItem, RowIndex) {
                        CsvString += RowItem.join(",") + "\r\n";
                    });
                    CsvString = "data:application/csv," + encodeURIComponent(CsvString);
                    var x = document.createElement("A");
                    x.setAttribute("href", CsvString);
                    x.setAttribute("download", "YR-25.csv");
                    document.body.appendChild(x);
                    x.click();
                };
            })
            .catch(error => console.error('Error:', error));  

            fetch(yr26)
            .then(function(response) {
                // When the page is loaded convert it to text
                return response.text()
            })
            .then(function(html) {
                // Initialize the DOM parser
                var parser = new DOMParser();
                // Parse the text
                var doc = parser.parseFromString(html, "text/html");
                feedDisplay.insertAdjacentHTML("beforeend", html)

                var dataChartAttr = doc.querySelector('.charts-highchart.chart').getAttribute('data-chart');
                var data = JSON.parse(dataChartAttr);
                var seriesData = data.series[0].data;

                // Convert timestamps in the data array
                var formattedDataArray = seriesData.map(function(item) {
                    return [formatDate(item[0]), item[1]];
                });

                console.log(formattedDataArray)

                ///dividing the data 
                var datesOnly = formattedDataArray.map(function(item) {
                    return formatDate(new Date(item[0])); // Extract only the date
                });
                
                var valuesOnly = formattedDataArray.map(function(item) {
                    return item[1]; // Extract only the date
                });
                
                //console.log(seriesData);
                //values fetch date 
                var titleChart = data.title.text;
                console.log(titleChart)
                document.getElementById("demo26").innerHTML = titleChart;
           
                new Chart('myCanvas26', {
                    type: 'line',
                    data: {
                        //labels: datesOnly,
                        datasets: [{
                            data: seriesData, 
                            borderColor: "green", 
                            fill: false
                            }]
                    },
                    options: {
                    scales: {
                                x: {
                                    type: 'time',
                                    time: {
                                        unit: 'day' // You can adjust this based on your data granularity
                                    }
                                }
                            }
                    }
                });

                var Results = formattedDataArray;
                exportToCsv26 = function() {
                    var CsvString = "";
                    Results.forEach(function(RowItem, RowIndex) {
                        CsvString += RowItem.join(",") + "\r\n";
                    });
                    CsvString = "data:application/csv," + encodeURIComponent(CsvString);
                    var x = document.createElement("A");
                    x.setAttribute("href", CsvString);
                    x.setAttribute("download", "YR-26.csv");
                    document.body.appendChild(x);
                    x.click();
                };
            })
            .catch(error => console.error('Error:', error));

            //year 2027
            fetch(yr27)
            .then(function(response) {
                // When the page is loaded convert it to text
                return response.text()
            })
            .then(function(html) {
                // Initialize the DOM parser
                var parser = new DOMParser();
                // Parse the text
                var doc = parser.parseFromString(html, "text/html");
                feedDisplay.insertAdjacentHTML("beforeend", html)

                var dataChartAttr = doc.querySelector('.charts-highchart.chart').getAttribute('data-chart');
                var data = JSON.parse(dataChartAttr);
                var seriesData = data.series[0].data;

                // Convert timestamps in the data array
                var formattedDataArray = seriesData.map(function(item) {
                    return [formatDate(item[0]), item[1]];
                });

                console.log(formattedDataArray)

                ///dividing the data 
                var datesOnly = formattedDataArray.map(function(item) {
                    return formatDate(new Date(item[0])); // Extract only the date
                });
                
                var valuesOnly = formattedDataArray.map(function(item) {
                    return item[1]; // Extract only the date
                });
                
                //console.log(seriesData);
                //values fetch date 
                var titleChart = data.title.text;
                console.log(titleChart)
                document.getElementById("demo27").innerHTML = titleChart;
           
                new Chart('myCanvas27', {
                    type: 'line',
                    data: {
                        //labels: datesOnly,
                        datasets: [{
                            data: seriesData, 
                            borderColor: "green", 
                            fill: false
                            }]
                    },
                    options: {
                    scales: {
                                x: {
                                    type: 'time',
                                    time: {
                                        unit: 'day' // You can adjust this based on your data granularity
                                    }
                                }
                            }
                    }
                });

                var Results = formattedDataArray;
                exportToCsv27 = function() {
                    var CsvString = "";
                    Results.forEach(function(RowItem, RowIndex) {
                        CsvString += RowItem.join(",") + "\r\n";
                    });
                    CsvString = "data:application/csv," + encodeURIComponent(CsvString);
                    var x = document.createElement("A");
                    x.setAttribute("href", CsvString);
                    x.setAttribute("download", "YR-27.csv");
                    document.body.appendChild(x);
                    x.click();
                };
            })
            .catch(error => console.error('Error:', error));

            //year 2029
            fetch(yr29)
            .then(function(response) {
                // When the page is loaded convert it to text
                return response.text()
            })
            .then(function(html) {
                // Initialize the DOM parser
                var parser = new DOMParser();
                // Parse the text
                var doc = parser.parseFromString(html, "text/html");
                feedDisplay.insertAdjacentHTML("beforeend", html)

                var dataChartAttr = doc.querySelector('.charts-highchart.chart').getAttribute('data-chart');
                var data = JSON.parse(dataChartAttr);
                var seriesData = data.series[0].data;

                // Convert timestamps in the data array
                var formattedDataArray = seriesData.map(function(item) {
                    return [formatDate(item[0]), item[1]];
                });

                console.log(formattedDataArray)

                ///dividing the data 
                var datesOnly = formattedDataArray.map(function(item) {
                    return formatDate(new Date(item[0])); // Extract only the date
                });
                
                var valuesOnly = formattedDataArray.map(function(item) {
                    return item[1]; // Extract only the date
                });
                
                //console.log(seriesData);
                //values fetch date 
                var titleChart = data.title.text;
                console.log(titleChart)
                document.getElementById("demo26").innerHTML = titleChart;
           
                new Chart('myCanvas29', {
                    type: 'line',
                    data: {
                        //labels: datesOnly,
                        datasets: [{
                            data: seriesData, 
                            borderColor: "green", 
                            fill: false
                            }]
                    },
                    options: {
                    scales: {
                                x: {
                                    type: 'time',
                                    time: {
                                        unit: 'day' // You can adjust this based on your data granularity
                                    }
                                }
                            }
                    }
                });

                var Results = formattedDataArray;
                exportToCsv29 = function() {
                    var CsvString = "";
                    Results.forEach(function(RowItem, RowIndex) {
                        CsvString += RowItem.join(",") + "\r\n";
                    });
                    CsvString = "data:application/csv," + encodeURIComponent(CsvString);
                    var x = document.createElement("A");
                    x.setAttribute("href", CsvString);
                    x.setAttribute("download", "YR-29.csv");
                    document.body.appendChild(x);
                    x.click();
                };
            })
            .catch(error => console.error('Error:', error));





            //quarter Q1-24 
            fetch(quarter1_24)
            .then(function(response) {
                // When the page is loaded convert it to text
                return response.text()
            })
            .then(function(html) {
                // Initialize the DOM parser
                var parser = new DOMParser();
                // Parse the text
                var doc = parser.parseFromString(html, "text/html");
                feedDisplay.insertAdjacentHTML("beforeend", html)

                var dataChartAttr = doc.querySelector('.charts-highchart.chart').getAttribute('data-chart');
                var data = JSON.parse(dataChartAttr);
                var seriesData2 = data.series[0].data;
                // Convert timestamps in the data array
                var formattedDataArray = seriesData2.map(function(item) {
                    return [formatDate(item[0]), item[1]];
                });

                //console.log(formattedDataArray)

                ///dividing the data 
                var datesOnly = formattedDataArray.map(function(item) {
                    return formatDate(new Date(item[0])); // Extract only the date
                });
                
                var valuesOnly = formattedDataArray.map(function(item) {
                    return item[1]; // Extract only the date
                });

                //console.log(seriesData2);
                var titleChart = data.title.text;
                console.log(titleChart)
                document.getElementById("demo1").innerHTML = titleChart;

                new Chart('myCanvas2', {
                    type: 'line',
                    data: {
                        //labels: years,
                        datasets: [{
                            data: seriesData2, 
                            borderColor: "blue", 
                            fill: false
                            }]
                    },
                    options: {
                        scales: {
                                    x: {
                                        type: 'time',
                                        time: {
                                            unit: 'day' // You can adjust this based on your data granularity
                                        }
                                    }
                                }
                        }
                });

                var Results = formattedDataArray;
                exportToCsv2 = function() {
                    var CsvString = "";
                    Results.forEach(function(RowItem, RowIndex) {
                        CsvString += RowItem.join(",") + "\r\n";
                    });
                    CsvString = "data:application/csv," + encodeURIComponent(CsvString);
                    var x = document.createElement("A");
                    x.setAttribute("href", CsvString);
                    x.setAttribute("download", "Q1-24.csv");
                    document.body.appendChild(x);
                    x.click();
                };
            })
            .catch(error => console.error('Error:', error));  

            //quarter Q2-24 
            fetch(quarter2_24)
            .then(function(response) {
                // When the page is loaded convert it to text
                return response.text()
            })
            .then(function(html) {
                // Initialize the DOM parser
                var parser = new DOMParser();
                // Parse the text
                var doc = parser.parseFromString(html, "text/html");
                feedDisplay.insertAdjacentHTML("beforeend", html)
       
                var dataChartAttr = doc.querySelector('.charts-highchart.chart').getAttribute('data-chart');
                var data = JSON.parse(dataChartAttr);
                var seriesData3 = data.series[0].data;
                //console.log(seriesData3);
                var formattedDataArray = seriesData3.map(function(item) {
                    return [formatDate(item[0]), item[1]];
                });

                //console.log(formattedDataArray)

                ///dividing the data 
                var datesOnly = formattedDataArray.map(function(item) {
                    return formatDate(new Date(item[0])); // Extract only the date
                });
                
                var valuesOnly = formattedDataArray.map(function(item) {
                    return item[1]; // Extract only the date
                });

                var titleChart = data.title.text;
                console.log(titleChart)
                document.getElementById("demo2").innerHTML = titleChart;

                new Chart('myCanvas3', {
                    type: 'line',
                    data: {
                        //labels: years,
                        datasets: [{
                            data: seriesData3, 
                            borderColor: "blue", 
                            fill: false
                            }]
                    },
                    options: {
                    scales: {
                        x: {
                                type: 'time',
                                time: {
                                    unit: 'day' // You can adjust this based on your data granularity
                                }
                            }
                    }
                    }
                });

                var Results = formattedDataArray;
                exportToCsv3 = function() {
                    var CsvString = "";
                    Results.forEach(function(RowItem, RowIndex) {
                        CsvString += RowItem.join(",") + "\r\n";
                    });
                    CsvString = "data:application/csv," + encodeURIComponent(CsvString);
                    var x = document.createElement("A");
                    x.setAttribute("href", CsvString);
                    x.setAttribute("download", "Q2-24.csv");
                    document.body.appendChild(x);
                    x.click();
                };
            })
            .catch(error => console.error('Error:', error));  

            //quarter Q3-24 
            fetch(quarter3_24)
            .then(function(response) {
                // When the page is loaded convert it to text
                return response.text()
            })
            .then(function(html) {
                // Initialize the DOM parser
                var parser = new DOMParser();
                // Parse the text
                var doc = parser.parseFromString(html, "text/html");
                feedDisplay.insertAdjacentHTML("beforeend", html)

                var dataChartAttr = doc.querySelector('.charts-highchart.chart').getAttribute('data-chart');
                var data = JSON.parse(dataChartAttr);
                var seriesData4 = data.series[0].data;

                var formattedDataArray = seriesData4.map(function(item) {
                    return [formatDate(item[0]), item[1]];
                });

                //console.log(formattedDataArray)

                ///dividing the data 
                var datesOnly = formattedDataArray.map(function(item) {
                    return formatDate(new Date(item[0])); // Extract only the date
                });
                
                var valuesOnly = formattedDataArray.map(function(item) {
                    return item[1]; // Extract only the date
                });

                //console.log(seriesData4);
                var titleChart = data.title.text;
                console.log(titleChart)
                document.getElementById("demo3").innerHTML = titleChart;

                new Chart('myCanvas4', {
                    type: 'line',
                    data: {
                        //labels: years,
                        datasets: [{
                            data: seriesData4, 
                            borderColor: "blue", 
                            fill: false
                            }]
                    },
                    options: {
                        scales: {
                                    x: {
                                        type: 'time',
                                        time: {
                                            unit: 'day' // You can adjust this based on your data granularity
                                        }
                                    }
                                }
                        }
                });

                var Results = formattedDataArray;
                exportToCsv4 = function() {
                    var CsvString = "";
                    Results.forEach(function(RowItem, RowIndex) {
                        CsvString += RowItem.join(",") + "\r\n";
                    });
                    CsvString = "data:application/csv," + encodeURIComponent(CsvString);
                    var x = document.createElement("A");
                    x.setAttribute("href", CsvString);
                    x.setAttribute("download", "Q3-24.csv");
                    document.body.appendChild(x);
                    x.click();
                };
            })
            .catch(error => console.error('Error:', error));

            //quarter Q4-24 
            fetch(quarter4_24)
            .then(function(response) {
                // When the page is loaded convert it to text
                return response.text()
            })
            .then(function(html) {
                // Initialize the DOM parser
                var parser = new DOMParser();
                // Parse the text
                var doc = parser.parseFromString(html, "text/html");
                feedDisplay.insertAdjacentHTML("beforeend", html)

                var dataChartAttr = doc.querySelector('.charts-highchart.chart').getAttribute('data-chart');
                var data = JSON.parse(dataChartAttr);
                var seriesData5 = data.series[0].data;
                //console.log(seriesData5);

                var formattedDataArray = seriesData5.map(function(item) {
                    return [formatDate(item[0]), item[1]];
                });

                //console.log(formattedDataArray)

                ///dividing the data 
                var datesOnly = formattedDataArray.map(function(item) {
                    return formatDate(new Date(item[0])); // Extract only the date
                });
                
                var valuesOnly = formattedDataArray.map(function(item) {
                    return item[1]; // Extract only the date
                });

                var titleChart = data.title.text;
                console.log(titleChart)
                document.getElementById("demo4").innerHTML = titleChart;

                new Chart('myCanvas5', {
                    type: 'line',
                    data: {
                        //labels: years,
                        datasets: [{
                            data: seriesData5, 
                            borderColor: "blue", 
                            fill: false
                            }]
                    },
                    options: {
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'day' // You can adjust this based on your data granularity
                            }
                        }
                    }
                    }
                });

                var Results = formattedDataArray;
                exportToCsv5 = function() {
                    var CsvString = "";
                    Results.forEach(function(RowItem, RowIndex) {
                        CsvString += RowItem.join(",") + "\r\n";
                    });
                    CsvString = "data:application/csv," + encodeURIComponent(CsvString);
                    var x = document.createElement("A");
                    x.setAttribute("href", CsvString);
                    x.setAttribute("download", "Q4-24.csv");
                    document.body.appendChild(x);
                    x.click();
                };
            })
            .catch(error => console.error('Error:', error));  


            //mar24
            fetch(mar24)
            .then(function(response) {
                // When the page is loaded convert it to text
                return response.text()
            })
            .then(function(html) {
                // Initialize the DOM parser
                var parser = new DOMParser();
                // Parse the text
                var doc = parser.parseFromString(html, "text/html");
                feedDisplay.insertAdjacentHTML("beforeend", html)
                
                var dataChartAttr = doc.querySelector('.charts-highchart.chart').getAttribute('data-chart');
                var data = JSON.parse(dataChartAttr);
                var seriesData6 = data.series[0].data;

                var formattedDataArray = seriesData6.map(function(item) {
                    return [formatDate(item[0]), item[1]];
                });

                //console.log(formattedDataArray)

                ///dividing the data 
                var datesOnly = formattedDataArray.map(function(item) {
                    return formatDate(new Date(item[0])); // Extract only the date
                });
                
                var valuesOnly = formattedDataArray.map(function(item) {
                    return item[1]; // Extract only the date
                });

                //console.log(seriesData);
                var titleChart = data.title.text;
                console.log(titleChart)
                document.getElementById("demo5").innerHTML = titleChart;

                new Chart('myCanvas6', {
                    type: 'line',
                    data: {
                        //labels: years,
                        datasets: [{
                            data: seriesData6, 
                            borderColor: "red", 
                            fill: false
                            }]
                    },
                    options: {
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'day' // You can adjust this based on your data granularity
                            }
                        }
                    }
                    }
                });

                var Results = formattedDataArray;
                exportToCsv6 = function() {
                    var CsvString = "";
                    Results.forEach(function(RowItem, RowIndex) {
                        CsvString += RowItem.join(",") + "\r\n";
                    });
                    CsvString = "data:application/csv," + encodeURIComponent(CsvString);
                    var x = document.createElement("A");
                    x.setAttribute("href", CsvString);
                    x.setAttribute("download", "mar24.csv");
                    document.body.appendChild(x);
                    x.click();
                };
            })
            .catch(error => console.error('Error:', error));  

            //abril 24
             fetch(apr24)
            .then(function(response) {
                // When the page is loaded convert it to text
                return response.text()
            })
            .then(function(html) {
                // Initialize the DOM parser
                var parser = new DOMParser();
                // Parse the text
                var doc = parser.parseFromString(html, "text/html");
                feedDisplay.insertAdjacentHTML("beforeend", html)

                var dataChartAttr = doc.querySelector('.charts-highchart.chart').getAttribute('data-chart');
                var data = JSON.parse(dataChartAttr);
                var seriesData7 = data.series[0].data;
                //console.log(seriesData);

                var formattedDataArray = seriesData7.map(function(item) {
                    return [formatDate(item[0]), item[1]];
                });

                //console.log(formattedDataArray)

                ///dividing the data 
                var datesOnly = formattedDataArray.map(function(item) {
                    return formatDate(new Date(item[0])); // Extract only the date
                });
                
                var valuesOnly = formattedDataArray.map(function(item) {
                    return item[1]; // Extract only the date
                });

                var titleChart = data.title.text;
                console.log(titleChart)
                document.getElementById("demo6").innerHTML = titleChart;

                new Chart('myCanvas7', {
                    type: 'line',
                    data: {
                        //labels: years,
                        datasets: [{
                            data: seriesData7, 
                            borderColor: "red", 
                            fill: false
                            }]
                    },
                    options: {
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'day' // You can adjust this based on your data granularity
                            }
                        }
                    }
                    }
                });

                var Results = formattedDataArray;
                exportToCsv7 = function() {
                    var CsvString = "";
                    Results.forEach(function(RowItem, RowIndex) {
                        CsvString += RowItem.join(",") + "\r\n";
                    });
                    CsvString = "data:application/csv," + encodeURIComponent(CsvString);
                    var x = document.createElement("A");
                    x.setAttribute("href", CsvString);
                    x.setAttribute("download", "apr24.csv");
                    document.body.appendChild(x);
                    x.click();
                };
            })
            .catch(error => console.error('Error:', error));  

             //maio_24
             fetch(may24)
            .then(function(response) {
                // When the page is loaded convert it to text
                return response.text()
            })
            .then(function(html) {
                // Initialize the DOM parser
                var parser = new DOMParser();
                // Parse the text
                var doc = parser.parseFromString(html, "text/html");
                feedDisplay.insertAdjacentHTML("beforeend", html)

                var dataChartAttr = doc.querySelector('.charts-highchart.chart').getAttribute('data-chart');
                var data = JSON.parse(dataChartAttr);
                var seriesData8 = data.series[0].data;
                //console.log(seriesData);

                var formattedDataArray = seriesData8.map(function(item) {
                    return [formatDate(item[0]), item[1]];
                });

                //console.log(formattedDataArray)

                ///dividing the data 
                var datesOnly = formattedDataArray.map(function(item) {
                    return formatDate(new Date(item[0])); // Extract only the date
                });
                
                var valuesOnly = formattedDataArray.map(function(item) {
                    return item[1]; // Extract only the date
                });

                var titleChart = data.title.text;
                console.log(titleChart)
                document.getElementById("demo7").innerHTML = titleChart;

                new Chart('myCanvas8', {
                    type: 'line',
                    data: {
                        //labels: years,
                        datasets: [{
                            data: seriesData8, 
                            borderColor: "red", 
                            fill: false
                            }]
                    },
                    options: {
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'day' // You can adjust this based on your data granularity
                            }
                        }
                    }
                    }
                });

                var Results = formattedDataArray;
                exportToCsv8 = function() {
                    var CsvString = "";
                    Results.forEach(function(RowItem, RowIndex) {
                        CsvString += RowItem.join(",") + "\r\n";
                    });
                    CsvString = "data:application/csv," + encodeURIComponent(CsvString);
                    var x = document.createElement("A");
                    x.setAttribute("href", CsvString);
                    x.setAttribute("download", "may24.csv");
                    document.body.appendChild(x);
                    x.click();
                };
            })
            .catch(error => console.error('Error:', error));  

            //junho_24
             fetch(jun24)
            .then(function(response) {
                // When the page is loaded convert it to text
                return response.text()
            })
            .then(function(html) {
                // Initialize the DOM parser
                var parser = new DOMParser();
                // Parse the text
                var doc = parser.parseFromString(html, "text/html");
                feedDisplay.insertAdjacentHTML("beforeend", html)
                
                var dataChartAttr = doc.querySelector('.charts-highchart.chart').getAttribute('data-chart');
                var data = JSON.parse(dataChartAttr);
                var seriesData9 = data.series[0].data;

                var formattedDataArray = seriesData9.map(function(item) {
                    return [formatDate(item[0]), item[1]];
                });

                //console.log(formattedDataArray)

                ///dividing the data 
                var datesOnly = formattedDataArray.map(function(item) {
                    return formatDate(new Date(item[0])); // Extract only the date
                });
                
                var valuesOnly = formattedDataArray.map(function(item) {
                    return item[1]; // Extract only the date
                });

                //console.log(seriesData);
                var titleChart = data.title.text;
                console.log(titleChart)
                document.getElementById("demo8").innerHTML = titleChart;

                new Chart('myCanvas9', {
                    type: 'line',
                    data: {
                        //labels: years,
                        datasets: [{
                            data: seriesData9, 
                            borderColor: "red", 
                            fill: false
                            }]
                    },
                    options: {
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'day' // You can adjust this based on your data granularity
                            }
                        }
                    }
                    }
                });

                var Results = formattedDataArray;
                exportToCsv9 = function() {
                    var CsvString = "";
                    Results.forEach(function(RowItem, RowIndex) {
                        CsvString += RowItem.join(",") + "\r\n";
                    });
                    CsvString = "data:application/csv," + encodeURIComponent(CsvString);
                    var x = document.createElement("A");
                    x.setAttribute("href", CsvString);
                    x.setAttribute("download", "jun24.csv");
                    document.body.appendChild(x);
                    x.click();
                };
            })
            .catch(error => console.error('Error:', error));  

             //julho_24
             fetch(jul24)
            .then(function(response) {
                // When the page is loaded convert it to text
                return response.text()
            })
            .then(function(html) {
                // Initialize the DOM parser
                var parser = new DOMParser();
                // Parse the text
                var doc = parser.parseFromString(html, "text/html");
                feedDisplay.insertAdjacentHTML("beforeend", html)

                var dataChartAttr = doc.querySelector('.charts-highchart.chart').getAttribute('data-chart');
                var data = JSON.parse(dataChartAttr);
                var seriesData10 = data.series[0].data;
                //console.log(seriesData);

                var formattedDataArray = seriesData10.map(function(item) {
                    return [formatDate(item[0]), item[1]];
                });

                //console.log(formattedDataArray)

                ///dividing the data 
                var datesOnly = formattedDataArray.map(function(item) {
                    return formatDate(new Date(item[0])); // Extract only the date
                });
                
                var valuesOnly = formattedDataArray.map(function(item) {
                    return item[1]; // Extract only the date
                });

                var titleChart = data.title.text;
                console.log(titleChart)
                document.getElementById("demo9").innerHTML = titleChart;

                new Chart('myCanvas10', {
                    type: 'line',
                    data: {
                        //labels: years,
                        datasets: [{
                            data: seriesData10, 
                            borderColor: "red", 
                            fill: false
                            }]
                    },
                    options: {
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'day' // You can adjust this based on your data granularity
                            }
                        }
                    }
                    }
                });

                var Results = formattedDataArray;
                exportToCsv10 = function() {
                    var CsvString = "";
                    Results.forEach(function(RowItem, RowIndex) {
                        CsvString += RowItem.join(",") + "\r\n";
                    });
                    CsvString = "data:application/csv," + encodeURIComponent(CsvString);
                    var x = document.createElement("A");
                    x.setAttribute("href", CsvString);
                    x.setAttribute("download", "jul24.csv");
                    document.body.appendChild(x);
                    x.click();
                };
            })
            .catch(error => console.error('Error:', error));  

         
           //agosto_24
             fetch(agu24)
            .then(function(response) {
                // When the page is loaded convert it to text
                return response.text()
            })
            .then(function(html) {
                // Initialize the DOM parser
                var parser = new DOMParser();
                // Parse the text
                var doc = parser.parseFromString(html, "text/html");
                feedDisplay.insertAdjacentHTML("beforeend", html)
                
                var dataChartAttr = doc.querySelector('.charts-highchart.chart').getAttribute('data-chart');
                var data = JSON.parse(dataChartAttr);
                var seriesData11 = data.series[0].data;

                var formattedDataArray = seriesData11.map(function(item) {
                    return [formatDate(item[0]), item[1]];
                });

                //console.log(formattedDataArray)

                ///dividing the data 
                var datesOnly = formattedDataArray.map(function(item) {
                    return formatDate(new Date(item[0])); // Extract only the date
                });
                
                var valuesOnly = formattedDataArray.map(function(item) {
                    return item[1]; // Extract only the date
                });

                //console.log(seriesData);
                var titleChart = data.title.text;
                console.log(titleChart)
                document.getElementById("demo10").innerHTML = titleChart;

                new Chart('myCanvas11', {
                    type: 'line',
                    data: {
                        //labels: years,
                        datasets: [{
                            data: seriesData11, 
                            borderColor: "red", 
                            fill: false
                            }]
                    },
                    options: {
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'day' // You can adjust this based on your data granularity
                            }
                        }
                    }
                    }
                });

                var Results = formattedDataArray;
                exportToCsv11 = function() {
                    var CsvString = "";
                    Results.forEach(function(RowItem, RowIndex) {
                        CsvString += RowItem.join(",") + "\r\n";
                    });
                    CsvString = "data:application/csv," + encodeURIComponent(CsvString);
                    var x = document.createElement("A");
                    x.setAttribute("href", CsvString);
                    x.setAttribute("download", "agu_24.csv");
                    document.body.appendChild(x);
                    x.click();
                };
            })
            .catch(error => console.error('Error:', error));
            
            //france 2025 
            fetch(yr25France)
            .then(function(response) {
                // When the page is loaded convert it to text
                return response.text()
            })
            .then(function(html) {
                // Initialize the DOM parser
                var parser = new DOMParser();
                // Parse the text
                var doc = parser.parseFromString(html, "text/html");
                feedDisplay.insertAdjacentHTML("beforeend", html)
                
                var dataChartAttr = doc.querySelector('.charts-highchart.chart').getAttribute('data-chart');
                var data = JSON.parse(dataChartAttr);
                var seriesData11 = data.series[0].data;

                var formattedDataArray = seriesData11.map(function(item) {
                    return [formatDate(item[0]), item[1]];
                });

                //console.log(formattedDataArray)

                ///dividing the data 
                var datesOnly = formattedDataArray.map(function(item) {
                    return formatDate(new Date(item[0])); // Extract only the date
                });
                
                var valuesOnly = formattedDataArray.map(function(item) {
                    return item[1]; // Extract only the date
                });

                //console.log(seriesData);
                var titleChart = data.title.text;
                console.log(titleChart)
                document.getElementById("demoFrance25").innerHTML = titleChart;

                new Chart('myCanvasFrance25', {
                    type: 'line',
                    data: {
                        //labels: years,
                        datasets: [{
                            data: seriesData11, 
                            borderColor: "red", 
                            fill: false
                            }]
                    },
                    options: {
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'day' // You can adjust this based on your data granularity
                            }
                        }
                    }
                    }
                });

                var Results = formattedDataArray;
                exportToCsvFrance25 = function() {
                    var CsvString = "";
                    Results.forEach(function(RowItem, RowIndex) {
                        CsvString += RowItem.join(",") + "\r\n";
                    });
                    CsvString = "data:application/csv," + encodeURIComponent(CsvString);
                    var x = document.createElement("A");
                    x.setAttribute("href", CsvString);
                    x.setAttribute("download", "FR_year25.csv");
                    document.body.appendChild(x);
                    x.click();
                };
            })
            .catch(error => console.error('Error:', error));
            
             //Germany 2025 
             fetch(yr25Germany)
             .then(function(response) {
                 // When the page is loaded convert it to text
                 return response.text()
             })
             .then(function(html) {
                 // Initialize the DOM parser
                 var parser = new DOMParser();
                 // Parse the text
                 var doc = parser.parseFromString(html, "text/html");
                 feedDisplay.insertAdjacentHTML("beforeend", html)
                 
                 var dataChartAttr = doc.querySelector('.charts-highchart.chart').getAttribute('data-chart');
                 var data = JSON.parse(dataChartAttr);
                 var seriesData11 = data.series[0].data;
 
                 var formattedDataArray = seriesData11.map(function(item) {
                     return [formatDate(item[0]), item[1]];
                 });
 
                 //console.log(formattedDataArray)
 
                 ///dividing the data 
                 var datesOnly = formattedDataArray.map(function(item) {
                     return formatDate(new Date(item[0])); // Extract only the date
                 });
                 
                 var valuesOnly = formattedDataArray.map(function(item) {
                     return item[1]; // Extract only the date
                 });
 
                 //console.log(seriesData);
                 var titleChart = data.title.text;
                 console.log(titleChart)
                 document.getElementById("demoGermany25").innerHTML = titleChart;
 
                 new Chart('myCanvasGermany25', {
                     type: 'line',
                     data: {
                         //labels: years,
                         datasets: [{
                             data: seriesData11, 
                             borderColor: "red", 
                             fill: false
                             }]
                     },
                     options: {
                     scales: {
                         x: {
                             type: 'time',
                             time: {
                                 unit: 'day' // You can adjust this based on your data granularity
                             }
                         }
                     }
                     }
                 });
 
                 var Results = formattedDataArray;
                 exportToCsvGermany25 = function() {
                     var CsvString = "";
                     Results.forEach(function(RowItem, RowIndex) {
                         CsvString += RowItem.join(",") + "\r\n";
                     });
                     CsvString = "data:application/csv," + encodeURIComponent(CsvString);
                     var x = document.createElement("A");
                     x.setAttribute("href", CsvString);
                     x.setAttribute("download", "Alem_year25.csv");
                     document.body.appendChild(x);
                     x.click();
                 };
             })
             .catch(error => console.error('Error:', error)); 



            // Function to convert timestamp to date string in "YYYY-MM-DD" format
            function formatDate(timestamp) {
                var date = new Date(timestamp);
                var year = date.getFullYear();
                var month = String(date.getMonth() + 1).padStart(2, '0');
                var day = String(date.getDate()).padStart(2, '0');
                return year + '-' + month + '-' + day;
            }
