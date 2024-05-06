//Navigation structure
document.addEventListener("DOMContentLoaded", () => {
    <h2>{{ user.name }}</h2>
<p>Want a new profile picture? <a href="#" data-toggle="modal" data-target="#gravatarModal">Update on Gravatar</a></p>

<!-- Modal -->
<div class="modal fade" id="gravatarModal" tabindex="-1" aria-labelledby="gravatarModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="gravatarModalLabel">Update Your Avatar</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        To update your avatar, please visit <a href="https://en.gravatar.com/emails/" target="_blank">Gravatar</a>. Gravatar is a globally recognized avatar linked to your email address.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

});
