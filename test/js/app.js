const con = document.getElementById('try');
		var id = Math.floor(Math.random()*50466)
		function add(){
			var task;
			const contain =
			 `<div class="contain task" id="r${id}">
						<div style="" class="delete" onclick="document.getElementById('r${id}').remove()">
							<i class="fa fa-remove"></i>
						</div><br>
						<div class="flex">
							<h2>Bamboo Stand</h2>
							<p class="green">Pledge $25 or more</p>
						</div>
						<p style="color: grey">You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list</p>
						<div class="flex" style="align-items: flex-start;">
							<h3 class="qty">101<span>left</span></h3>
							<!-- <a href="#" class="back" style="background-color: red">Delete</a> -->
							<a href="#" class="back" style="">Select Reward</a>

						</div>
					</div>
				`
			con.insertAdjacentHTML('beforeend', contain);
		}