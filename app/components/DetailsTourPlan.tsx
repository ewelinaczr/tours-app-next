import React from "react";
import styles from './DetailsTourPlan.module.css'

function DetailsTourPlan({tourPlan, attractions}:{tourPlan:string[], attractions:string[]}) {

function renderPlanItem(day: string, index:number){
  return <div key={`tour-plan-day${index+1}`} className={styles.tourItem}>
    <div className={styles.itemIndex}>{index+1}</div><p>{day}</p>
  </div>
}

function renderAttractionItem(attraction: string, index:number){
  return <div key={`attractiony${index+1}`} className={styles.tourItem}>
    <div className={styles.emptyItemIndex}></div><p>{attraction}</p>
  </div>
}

  return <>
  {tourPlan.length ? <h5>Tour Plan</h5> : null}
  {tourPlan.length ? tourPlan.map((day, index)=>renderPlanItem(day,index)) : null}
  {attractions.length ? <h5>Attractions</h5> : null}
  {attractions.length ? attractions.map((attraction, index)=>renderAttractionItem(attraction,index)) : null}
  </>;
}

export default DetailsTourPlan;
