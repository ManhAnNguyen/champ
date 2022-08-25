import { dataBath } from "data/bathroom";
import { dataBed } from "data/bed";
import { dataLiving } from "data/living";
import { handleDetailProduct } from "pages/Home/store";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useAppDispatch } from "redux/hook";
import styled from "styled-components";

const Search = () => {
  const [total, setTotal] = useState<any>([]);
  const dispatch = useAppDispatch();
  const [dataSearch, setDataSearch] = useState<any>([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    setTotal([...total, ...dataBath, ...dataBed, ...dataLiving]);
  }, []);

  useEffect(() => {
    if (!!value) {
      setDataSearch(
        total.filter((t: any) =>
          t.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setDataSearch(null);
    }
  }, [value, total]);

  return (
    <SSearch>
      <input
        type="text"
        placeholder="Tìm kiếm"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <span className="icon">
        <FiSearch fontSize={23} color="#434343" />
      </span>
      {dataSearch !== null && (
        <div className="search-context">
          {dataSearch.length > 0 ? (
            dataSearch.map((d: any, index: any) => (
              <p
                className="results"
                key={`index-resdudl${index}`}
                onClick={() => dispatch(handleDetailProduct(d))}
              >
                {d.name}
              </p>
            ))
          ) : (
            <h3 className="no-data">Kết quả tìm kiếm không phù hợp</h3>
          )}
        </div>
      )}
    </SSearch>
  );
};

export default Search;

const SSearch = styled.div`
  flex: 1;
  position: relative;
  border: 1px solid #33cccc;
  max-width: 600px;
  padding: 10px 30px;
  border-radius: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  input {
    flex: 1;
    outline: none;
    border: none;
  }
  .icon {
    transform: translateY(2px);
  }
  .search-context {
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    min-height: 130px;
    max-height: 250px;
    background-color: white;
    /* border-radius: 4px; */
    transform: translateY(10px);
    overflow: auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 10px;
    border-radius: 7px;
    .no-data {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 16px;
      color: #434343;
    }
    .results {
      padding: 5px 7px;
      cursor: pointer;
      font-size: 15px;
      border-radius: inherit;
      color: #434343;
      transition: all 0.2s linear;
      &:hover {
        background-color: #33cccc;
        color: white;
      }
    }
  }
`;
