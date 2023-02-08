import React from "react";
import "../css/ResourceCard.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ResourceCard(props) {
  const {
    ConsumedQuantity,
    Cost,
    Date,
    Location,
    MeterCategory,
    ResourceGroup,
    ResourceLocation,
    ServiceName,
    UnitOfMeasure,
    Tags,
    isLoading,
    setIsLoading,
  } = props;
  return (
    <div className="d-flex flex-column application-card m-3">
      {isLoading ? (
        <Skeleton className="my-4 py-3" />
      ) : (
        <span className="p-3">
          Consumed Quantity:<span>{ConsumedQuantity}</span>
        </span>
      )}
      <hr className="application-card-separator" />
      {isLoading ? (
        <Skeleton className="my-4 py-3" />
      ) : (
        <span className="p-3">
          Cost:<span>{Cost}</span>
        </span>
      )}
      <hr className="application-card-separator" />
      {isLoading ? (
        <Skeleton className="my-4 py-3" />
      ) : (
        <span className="p-3">
          Date:<span>{Date}</span>
        </span>
      )}
      <hr className="application-card-separator" />
      {isLoading ? (
        <Skeleton className="my-4 py-3" />
      ) : (
        <span className="p-3">
          Location:<span>{Location}</span>
        </span>
      )}
      <hr className="application-card-separator" />
      {isLoading ? (
        <Skeleton className="my-4 py-3" />
      ) : (
        <span className="p-3">
          Meter Category:<span>{MeterCategory}</span>
        </span>
      )}
      <hr className="application-card-separator" />
      {isLoading ? (
        <Skeleton className="my-4 py-3" />
      ) : (
        <span className="p-3">
          Resource Group:<span>{ResourceGroup}</span>
        </span>
      )}
      <hr className="application-card-separator" />
      {isLoading ? (
        <Skeleton className="my-4 py-3" />
      ) : (
        <span className="p-3">
          Resource Location:<span>{ResourceLocation}</span>
        </span>
      )}
      <hr className="application-card-separator" />
      {isLoading ? (
        <Skeleton className="my-4 py-3" />
      ) : (
        <span className="p-3">
          Service Name:<span>{ServiceName}</span>
        </span>
      )}
      <hr className="application-card-separator" />
      {isLoading ? (
        <Skeleton className="my-4 py-3" />
      ) : (
        <span className="p-3">
          Unit Of Measure:<span>{UnitOfMeasure}</span>
        </span>
      )}
      <hr className="application-card-separator" />
      {isLoading ? (
        <Skeleton className="my-4 py-3" />
      ) : (
        <span className="p-3">
          environment :<span>{Tags?.environment}</span>
        </span>
      )}
    </div>
  );
}
