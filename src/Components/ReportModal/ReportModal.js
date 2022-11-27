import React from 'react';
import { toast } from 'react-hot-toast';

const ReportModal = ({ reportData, setReportData }) => {
    const handleReport = (e) => {
        e.preventDefault();

        reportData.message = e.target.report.value;

        fetch(`${process.env.REACT_APP_SERVER_URL}/report`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("remart-token")}`
            },
            body: JSON.stringify(reportData)
        }).then(response => response.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Report submitted");
                }

            }).catch(error => console.log(error))
        setReportData(null)
    }
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="report-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className='flex'>
                        <h3 className="font-bold text-lg mb-3 flex-1">Report: {reportData.productName}</h3>
                        <label htmlFor="report-modal" className="font-bold text-lg cursor-pointer btn btn-outline">X</label>
                    </div>
                    <form onSubmit={handleReport}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Pleas type what issue did you face? (optional)</span>
                            </label>
                            <textarea name='report' className="textarea textarea-error w-full mt-2" placeholder="Pleas type what issue did you face?"></textarea>
                        </div>
                        <div className="modal-action">
                            <button type="submit" className='btn btn-error'>Report</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ReportModal;