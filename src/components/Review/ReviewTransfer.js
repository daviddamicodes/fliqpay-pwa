import React, { useState } from "react";
import { useSelector } from "react-redux";
import { numFormat } from "../NumberFormat";
import Modal from "../Modal";
import PaymentModal from "../PaymentModal";

const ReviewTransfer = () => {
  const [showModal, setShowModal] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(!modalIsOpen);
    setShowModal((prev) => !prev);
  };

  console.log(modalIsOpen);

  const state = useSelector((state) => state.details);

  return (
    <div className="bg-gray-50 h-screen pt-14 relative">
      <div className="bg-white max-w-470 rounded-lg px-6 py-8 mx-auto">
        <h4 className="font-semibold text-md mb-4 pb-2 border-b-2 border-gray-50 text-purple-900">
          Review details of your transfer
        </h4>
        <div className="py-3">
          <div className="flex justify-between items-end mb-4">
            <h4 className="font-medium text-xs text-gray-400 leading-none">
              You send
            </h4>
            <h4 className="font-semibold text-md text-gray-700 text-right leading-none">
              {numFormat(state.youSend)} {state.fromCurrency}
            </h4>
          </div>
          <div className="flex justify-between items-end mb-4">
            <h4 className="font-medium text-xs text-gray-400 leading-none">
              Total fees (included)
            </h4>
            <h4 className="font-medium text-xs text-gray-700 text-right leading-none">
              {state.transferFee} {state.fromCurrency}
            </h4>
          </div>
          <div className="flex justify-between items-end mb-4">
            <h4 className="font-medium text-xs text-gray-400 leading-none">
              Amount we’ll convert
            </h4>
            <h4 className="font-medium text-xs text-gray-700 text-right leading-none">
              {state.convertedAmount} {state.fromCurrency}
            </h4>
          </div>
          <div className="flex justify-between items-end mb-4">
            <h4 className="font-medium text-xs text-gray-400 leading-none">
              Guaranteed rate
            </h4>
            <h4 className="font-medium text-xs text-gray-700 text-right leading-none">
              {state.guaranteedRate}
            </h4>
          </div>
          <div className="flex justify-between items-end mb-4">
            <h4 className="font-medium text-xs text-gray-400 leading-none">
              Johnny gets
            </h4>
            <h4 className="font-semibold text-md text-gray-700 text-right leading-none">
              {numFormat(state.recipientGets)} {state.toCurrency}
            </h4>
          </div>
        </div>
        <div className="py-8 border-t-2 border-gray-50">
          <div className="flex justify-between items-end mb-4">
            <h4 className="font-medium text-xs text-gray-400 leading-none">
              Name
            </h4>
            <h4 className="font-medium text-xs text-gray-700 text-right leading-none">
              {state.fullName}
            </h4>
          </div>
          <div className="flex justify-between items-end mb-4">
            <h4 className="font-medium text-xs text-gray-400 leading-none">
              Email address
            </h4>
            <h4 className="font-medium text-xs text-gray-700 text-right leading-none">
              {state.email}
            </h4>
          </div>
          <div className="flex justify-between items-end mb-4">
            <h4 className="font-medium text-xs text-gray-400 leading-none">
              IBAN / Account number
            </h4>
            <h4 className="font-medium text-xs text-gray-700 text-right leading-none">
              {state.ibanAcct}
            </h4>
          </div>
          {state.swiftBic.length > 1 ? (
            <div className="flex justify-between items-end mb-4">
              <h4 className="font-medium text-xs text-gray-400 leading-none">
                SWIFT / BIC code
              </h4>
              <h4 className="font-medium text-xs text-gray-700 text-right leading-none">
                {state.swiftBic}
              </h4>
            </div>
          ) : (
            <></>
          )}
        </div>
        <button
          className="w-full font-medium text-xs py-4 px-6 bg-green-1 text-white flex-grow rounded-md"
          onClick={openModal}
        >
          Continue
        </button>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        openModal={openModal}
      />
      {/* <PaymentModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        openModal={openModal}
      /> */}
    </div>
  );
};

export default ReviewTransfer;
