import "./PokedexRegionPanel.scss";
import { Table, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { capitalize } from "../../../utilities/pokedex-utilities";

const TableContent = ({ regionList, isLoading, getRegionalDetailsFunc }) => {
  const isGetRegionalDetailsFunc = getRegionalDetailsFunc && typeof getRegionalDetailsFunc === 'function';
  const isRegionList = regionList && regionList.length ;
  if (isRegionList && isGetRegionalDetailsFunc) {
    if (isLoading) {
      return (
        <tr>
          <td colSpan={3}>
            <Spinner
              animation="border"
              className="spinner-container"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </Spinner>
          </td>
        </tr>
      );
    }
    return regionList.map((data) => {
      return (
        <tr key={data.id} onClick={() => getRegionalDetailsFunc(data.url)}>
          <td colSpan={3}>{data.displayName}</td>
        </tr>
      );
    });
  }
  return (
    <tr>
      <td colSpan={3}>No data</td>
    </tr>
  );
};

const setRegionDetailsList = (setRegionListDetails, regionList) => {
  const setRegionListDetailsFunc =
    setRegionListDetails && typeof setRegionListDetails === "function";
  if (setRegionListDetailsFunc && regionList.pokedexData) {
    const regionDetailsList = regionList.pokedexData.data.results.map(
      (regionDetails, index) => {
        const newName = regionDetails.name.replace(/-/g, ' ');
        const displayName = capitalize(newName);
        return {
          id: index,

          displayName,
          name: regionDetails.name,
          url: regionDetails.url,
        };
      }
    );
    setRegionListDetails(regionDetailsList);
  }
};

const PokedexRegionPanel = ({ regionList, isLoading, getRegionalDetailsFunc }) => {
  const [regionListDetails, setRegionListDetails] = useState(null);
  
  useEffect(() => {
    setRegionDetailsList(setRegionListDetails, regionList);
  }, [regionList]);

  return (
    <>
      <h5 className="region-title">Select Region</h5>
      <Table responsive>
        <tbody>
          <TableContent regionList={regionListDetails} isLoading={isLoading} getRegionalDetailsFunc={getRegionalDetailsFunc} />
        </tbody>
      </Table>
    </>
  );
};

export default PokedexRegionPanel;
