import React, { Component } from "react";
import PropTypes from "prop-types";

const Modal = ({ closeModal, modalState, title }) => {
  if(!modalState) {
    return null;
  }

  return(
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" onClick={closeModal} />
        </header>
        <section className="modal-card-body">
          <div className="content">

            <div className="field">
              <label className="label">Title</label>
              <input type="text" className="input" placeholder="Title"/>
            </div>

            <div className="field">
              <label className="label">Created By</label>
              <input type="text" className="input" placeholder="Created By"/>
            </div>

            <div className="field">
              <label className="label">Assigned To</label>
              <input type="text" className="input" placeholder="Assigned To"/>
            </div>

            <div className="field">
              <label className="label">Priority</label>
              <div className="control">
                <div className="select">
                  <select>
                    <option>Select dropdown</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Blocker</option>
                  </select>
                </div>
              </div>
            </div>

          </div>
        </section>
        <footer className="modal-card-foot">
          <div className="field is-grouped">
            <div className="control">
              <a className="button" onClick={closeModal}>Cancel</a>
            </div>
            <div className="control">
              <button className="button is-primary">Submit</button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func,
  modalState: PropTypes.bool,
  title: PropTypes.string
}

export default Modal;
