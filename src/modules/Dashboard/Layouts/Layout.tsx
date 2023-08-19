// import React from 'react'


const Layout = () => {
  return (
    <div className={styles.full_page}>
            {/* <SideNavBar sidebarButtons={buttons} /> */}
            <div className={styles.right_side} id="right">
                {/* <TopNavBar /> */}
                <div className={styles.main_content}>
                    {/* <Suspense fallback={<MuLoader />}> */}

                        <Outlet />
                    {/* </Suspense> */}
                </div>
            </div>
        </div >
  )
}

export default Layout