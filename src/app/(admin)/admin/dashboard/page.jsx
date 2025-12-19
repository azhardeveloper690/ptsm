export default function AdminDashboard() {
  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <div className="card dashboard-card card-primary">
            <div className="card-body d-flex justify-content-between">
              <div><h4>1,254</h4><p>Total Users</p></div>
              <div className="card-icon"><i className="fas fa-users"></i></div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card dashboard-card card-warning">
            <div className="card-body d-flex justify-content-between">
              <div><h4>524</h4><p>Active Now</p></div>
              <div className="card-icon"><i className="fas fa-user-check"></i></div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card dashboard-card card-success">
            <div className="card-body d-flex justify-content-between">
              <div><h4>82%</h4><p>Engagement Rate</p></div>
              <div className="card-icon"><i className="fas fa-chart-line"></i></div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card dashboard-card card-info">
            <div className="card-body d-flex justify-content-between">
              <div><h4>324</h4><p>New This Month</p></div>
              <div className="card-icon"><i className="fas fa-user-plus"></i></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
