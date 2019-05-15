import React, {Component} from 'react';

class ProfileBox extends Component {
  render() {
    return(
      <form className="form-container border p-2 bg-light">
      <div className="form-group">
        <div className="media mb-3 mt-2">
          <img src="https://via.placeholder.com/250" class="mr-3" alt="..." />
          <div className="media-body">
            <h1>Hacktiv8 Meetup</h1>
            <table class="table table-borderless table-responsive">
              <tbody>
                <tr>
                  <td>Location</td>
                  <td>Jakarta</td>
                </tr>
                <tr>
                  <td>Member</td>
                  <td>1,078</td>
                </tr>
                <tr>
                  <td>Organizers</td>
                  <td>Adhy Wiranata</td>
                </tr>
                </tbody>
              </table>
              <p>
                <button type="button" className="btn btn-primary bg-secondary btn-">Join Us</button>
              </p>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default ProfileBox;
