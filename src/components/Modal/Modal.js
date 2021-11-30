import React from 'react';
import { Modal as BModal } from "react-bootstrap-v5"

export function Modal({ children, footer, show, onHide, title }){
    return (
        <BModal show={show} onHide={onHide}>
            <BModal.Header closeButton>
                <BModal.Title>
                    {title}
                </BModal.Title>
            </BModal.Header>
        
            <BModal.Body>
                {children}
            </BModal.Body>

            {footer && (
                <BModal.Footer>
                    {footer}
                </BModal.Footer>
            )}
        </BModal>
    );
}