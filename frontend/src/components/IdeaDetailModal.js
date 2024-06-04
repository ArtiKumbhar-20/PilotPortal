import React, { useEffect } from 'react';

const IdeaDetailModal = ({ show, handleClose, title, body }) => {

    useEffect(() => {
        const modal = new window.bootstrap.Modal(document.getElementById('staticBackdrop'));
        show ? modal.show() : modal.hide();
    }, [show]);

    return (
        <>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel"><b>{title}</b></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                        </div>
                        <div className="modal-body">
                            {body}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IdeaDetailModal;
