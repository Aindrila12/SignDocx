import React, { useEffect, useState } from 'react'
import Page from "./page";
import { useNavigate } from 'react-router-dom';

export default function Employee() {
  const navigate = useNavigate();

  const [employeeList, setEmployeeList] = useState([
    {
      "name": "A",
      "email": "a@gmail.com",
      "mobileno": "7797819389",
      "status": 0
    },
    {
      "name": "A",
      "email": "a@gmail.com",
      "mobileno": "7797819389",
      "status": 0
    },
    {
      "name": "A",
      "email": "a@gmail.com",
      "mobileno": "7797819389",
      "status": 0
    },
    {
      "name": "A",
      "email": "a@gmail.com",
      "mobileno": "7797819389",
      "status": 0
    },
  ]);
  const [limit, setLimit] = useState("10");
  const [offset, setOffset] = useState("0");
  const [search, setSearch] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteClientId, setDeleteClientId] = useState("");
  const [employeeModalShow, setEmployeeModalShow] = useState(false);

  useEffect(() => {
    // companyListFun();
  }, [])

  //Add employee modal open
  const handleEmployeeModalShow = () => {
    setEmployeeModalShow(true);
  }
  
  //Delete modal open
  const handleDeleteModalShow = (id) => {
    setDeleteModal(true);
    setDeleteClientId(id);
  }

  //Delete modal close
  const handleDeleteModalClose = () => {
    setDeleteModal(false);
  }

  //Add employee modal close
  const handleEmployeeModalClose = () => {
    setEmployeeModalShow(false);
  }

  // Pagination cange
  const handleChangePage = (e, val) => {
    let off = (val - 1) * limit;
    setOffset(off);
    setPageNumber(val);
  };

  // Get employee list
  // const companyListFun = () => {
  //   const data = {
  //     "limit": limit,
  //     "offset": offset,
  //     "searchText": search
  //   }

  //   companyList(data).then(result => {
  //     if (result.data.success) {
  //       setClientList(result.data.response);
  //       // if (offset == 0) {
  //       //   setTotalCount(result.data.response.count);
  //       //   let totalPage = Math.ceil(result.data.response.count / limit);
  //       //   setTotalPage(totalPage);
  //       // }
  //       // if (result.data.response.data.length === 0 && offset > 0) {
  //       //   setOffset(0);
  //       // }
  //     } else {
  //       setClientList([]);
  //     }
  //   })
  // }

  // Go to client adding page
  const addEmployee = () => {
    navigate("/admin/addemployee");
  }

  // Go to client detail page
  const goToDetail = (path) => {
    navigate(path);
  }

  //Delete company
  // const onDeleteClient = () => {
  //   const data = {
  //     "companyId" : deleteClientId
  //   }

  //   deleteCompany(data).then(result => {
  //     if(result.data.success){
  //       handleDeleteModalClose();
  //       companyListFun();
  //     } else{

  //     }
  //   })
  // }

  return (
    <Page
      employeeList={employeeList}
      addEmployee={addEmployee}
      goToDetail={goToDetail}

      totalPage={totalPage}
      handleChangePage={handleChangePage}
      pageNumber={pageNumber}

      deleteModal={deleteModal}
      handleDeleteModalClose={handleDeleteModalClose}
      handleDeleteModalShow={handleDeleteModalShow}
      // onDeleteClient={onDeleteClient}

      employeeModalShow={employeeModalShow}
      handleEmployeeModalClose={handleEmployeeModalClose}
      handleEmployeeModalShow={handleEmployeeModalShow}
    />
  )
}
