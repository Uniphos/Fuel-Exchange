import React from 'react';
import "../../styles/sellerProfile/sellerHome.css";

const SellerHome = () => {
    let selector = [
        { info: "Order Info", Due: "Due on" , delivered: "Delivered on", status: "Status" },
        { info: "EN590", Due: "Date here" , delivered: "Date here", status: "Completed" },
        { info: "Jet A1", Due: "Date here" , delivered: "Date here", status: "Pending" },
        { info: "D6", Due: "Date here" , delivered: "Date here", status: "Cancelled" },
        { info: "VTTI", Due: "Date here" , delivered: "Date here", status: "Negotiating" },
        { info: "VTTI", Due: "Date here" , delivered: "Date here", status: "Completed" },
    ];

    let inbox = [
        { name: "JET A1", quantity: "234" , message: "Showcase message here" },
        { name: "JET A1", quantity: "234" , message: "Showcase message here" },
        { name: "JET A1", quantity: "234" , message: "Showcase message here" },
        { name: "JET A1", quantity: "234" , message: "Showcase message here" },
    ];
    return (
        <div className='sellerHome'>
            <div className='marketValue'>
                <h4>Market Value</h4>
                <table className='marketTable'>
                    <tbody>
                        <tr>
                            <td>Jet A10</td>
                            <td>Price</td>
                            <td className='positive'>+1.27</td>
                            <td>Jet A10</td>
                            <td>Price</td>
                            <td className='positive'>+1.27</td>
                        </tr>
                        <tr>
                            <td>EN590</td>
                            <td>Price</td>
                            <td className='negative'>-0.46</td>
                            <td>EN590</td>
                            <td>Price</td>
                            <td className='negative'>-0.46</td>
                        </tr>
                        <tr>
                            <td>D6</td>
                            <td>Price</td>
                            <td className='positive'>+1.27</td>
                            <td>D6</td>
                            <td>Price</td>
                            <td className='positive'>+1.27</td>
                        </tr>
                        <tr>
                            <td>Jet A10</td>
                            <td>Price</td>
                            <td className='negative'>-0.46</td>
                            <td>Jet A10</td>
                            <td>Price</td>
                            <td className='negative'>-0.46</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='orders'>
                <h4>Manage orders</h4>
                <div className='orderTable'>
                        {selector.map((selector, index) => (
                                    <div className='orderRows' key={index}>
                                        <p>{selector.info}</p>
                                        <p>{selector.Due}</p>
                                        <p>{selector.delivered}</p>
                                        <p className={selector.status}>{selector.status}</p>
                                    </div>
                        ))}
                </div>
            </div>
            <div className='infoContainer'>
                <div className='inbox'>
                    <h4>Inbox Updates</h4>
                    <div className='inboxTable'>
                        {inbox.map((inbox, index) => (
                            <div key={index} className='inboxRows'>
                                <p>{inbox.name}|Qty:{inbox.quantity}</p>

                                <p>{inbox.message}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='earnings'>
                    <h4>Earnings</h4>
                    <div className='earningsTable'>
                        <h1>$8,687</h1>
                        <div className='earningsBottom'>
                            <h3>October</h3>
                            <p>View</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SellerHome;