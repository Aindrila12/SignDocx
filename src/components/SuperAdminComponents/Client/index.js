import React, { useEffect, useState } from 'react'
import Page from "./page";
import { useNavigate } from 'react-router-dom';
import { companyList, deleteCompany } from '../../../actions/apiCall';

export default function Client() {
  const navigate = useNavigate();

  const [clientList, setClientList] = useState([]);
  const [limit, setLimit] = useState("10");
  const [offset, setOffset] = useState("0");
  const [search, setSearch] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteClientId, setDeleteClientId] = useState("");

  useEffect(() => {
    companyListFun();
  }, [])

  //Delete modal open
  const handleDeleteModalShow = (id) => {
    setDeleteModal(true);
    setDeleteClientId(id);
  }

  //Delete modal close
  const handleDeleteModalClose = () => {
    setDeleteModal(false);
  }

  // Pagination cange
  const handleChangePage = (e, val) => {
    let off = (val - 1) * limit;
    setOffset(off);
    setPageNumber(val);
  };

  // Get company list
  const companyListFun = () => {
    const data = {
      "limit": limit,
      "offset": offset,
      "searchText": search
    }

    companyList(data).then(result => {
      if (result.data.success) {
        setClientList(result.data.response);
        // if (offset == 0) {
        //   setTotalCount(result.data.response.count);
        //   let totalPage = Math.ceil(result.data.response.count / limit);
        //   setTotalPage(totalPage);
        // }
        // if (result.data.response.data.length === 0 && offset > 0) {
        //   setOffset(0);
        // }
      } else {
        setClientList([]);
      }
    })
  }

  // Go to client adding page
  const addClient = () => {
    navigate("/super-admin/addclient");
  }

  // Go to client detail page
  const goToDetail = (path) => {
    navigate(path);
  }

  //Delete company
  const onDeleteClient = () => {
    const data = {
      "companyId" : deleteClientId
    }

    deleteCompany(data).then(result => {
      if(result.data.success){
        handleDeleteModalClose();
        companyListFun();
      } else{

      }
    })
  }

  return (
    <Page
      clientList={clientList}
      addClient={addClient}
      goToDetail={goToDetail}

      totalPage={totalPage}
      handleChangePage={handleChangePage}
      pageNumber={pageNumber}

      deleteModal={deleteModal}
      handleDeleteModalClose={handleDeleteModalClose}
      handleDeleteModalShow={handleDeleteModalShow}
      onDeleteClient={onDeleteClient}
    />
  )
}
