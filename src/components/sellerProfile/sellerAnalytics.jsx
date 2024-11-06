import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../../styles/sellerProfile/sellerAnalytics.css';

const SellerHome = () => {
    const sections = [
        { title: 'Orders 1', status: 'Completed', quantity: '23mt', date:'11/5/24', price:'$3456', port: 'port name & location', estDate: '99/99/99', quality: 'Fuel Quality goes here', info: 'Transaction info here'},
        { title: 'Orders 2', status: 'Pending', quantity: '23mt', date:'11/5/24', price:'$3456', port: 'port name & location', estDate: '99/99/99', quality: 'Fuel Quality goes here', info: 'Transaction info here'},
        { title: 'Orders 3', status: 'Cancelled', quantity: '23mt', date:'11/5/24', price:'$3456', port: 'port name & location', estDate: '99/99/99', quality: 'Fuel Quality goes here', info: 'Transaction info here'},
        { title: 'Orders 4', status: 'Negotiating', quantity: '23mt', date:'11/5/24',price:'$3456',  port: 'port name & location', estDate: '99/99/99', quality: 'Fuel Quality goes here', info: 'Transaction info here'},
        { title: 'Orders 5', status: 'Completed', quantity: '23mt', date:'11/5/24', price:'$3456', port: 'port name & location', estDate: '99/99/99', quality: 'Fuel Quality goes here', info: 'Transaction info here'},
    ];

    const [expandedSections, setExpandedSections] = useState(Array(sections.length).fill(false));

    const toggleExpand = (index) => {
        setExpandedSections(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Fuel Bought',
                backgroundColor: 'rgb(22, 115, 189)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };

    const options = {
        plugins: {
            title: {
                display: true,
                fontSize: 20
            },
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }
        }
    };

    return (
        
        <div className='mainAnalytics'>
            <div className='analyticsTop'>
                <p>Analytics</p>
                <div className='topAnalytics'>
                    <div className='topItem'>
                        <p>Earning to date</p>
                        <h1>$</h1>  
                    </div>
                    <div className='topItem'>
                        <p>Order completion</p>
                        <h1>%</h1>
                    </div>
                    <div className='topItem'>
                        <p>Order completed</p>
                        <h1>#</h1>
                    </div>
                    <div className='topItem'>
                        <p>Order pending</p>
                        <h1>#</h1>
                    </div>
                </div>
            </div>
            <div className='boughtGraph'>
                <p>Earnings</p>
                <div className='graph'>
                    <Bar
                        data={data}
                        options={options}

                    />
                </div>
            </div>
            <p>Orders</p>
            <div className='orderHistoryContainer'>
                {sections.map((section, index) => (
                    <div className='orderHistory' key={index}>
                        <div className='orderTopInfo'>
                            <p>{section.title}</p>
                            <div className={section.status}>
                                <p>{section.status}</p>
                            </div>
                        </div>
                        <div className='orderBottomInfo'>
                            <div className='orderInfo'>
                                <p>Quantity: {section.quantity}</p>
                                <p>Order date: {section.date}</p>
                                <p>Price: {section.price}</p>
                            </div>
                            <button className='expandBtn' onClick={() => toggleExpand(index)}>
                                {expandedSections[index] ? 'Show Less' : 'Show More'}
                            </button>
                        </div>
                        {expandedSections[index] && (
                            <div className='additionalInfo'>
                                <p>Port: <br/> {section.port}</p>
                                <p>Estimate deliver: <br/> {section.estDate}</p>
                                <p>Fuel Quality: <br/> {section.quality}</p>
                                <p>Transaction Info: <br/> {section.info}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <br/>
        </div>
    );
};

export default SellerHome;