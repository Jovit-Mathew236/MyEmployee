// import React from 'react'

import styles from "./CreateProject.module.css";
type Props ={
  setCreatePopUp: React.Dispatch<React.SetStateAction<boolean>>
}
const CreateProject = (props:Props) => {
    return (
        <div className={styles.create_pop_up_container}>
            <div className={styles.close_btn} onClick={()=>{
              props.setCreatePopUp(false)
            }}>
                <i className="fi fi-sr-circle-xmark"></i>
            </div>
            <h1>ADD NEW PROJECT</h1>

            <form action="">
                <input type="text" />
                <input type="date" />
                <textarea name="" id="" cols={30} rows={10}></textarea>
                <input type="text" />

                <div className={styles.btn_container}>
                    <button className={styles.cancel_btn}>Cancel</button>
                    <button className={styles.create_btn}>Create</button>
                </div>
            </form>
        </div>
    );
};

export default CreateProject;
