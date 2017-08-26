		</div>
	</div>
</div>
</div>

<!-- FOOTER  -->
<footer id="footer">
	<div class="container">
		<p class="copyright"><?= $site_title ?> maintained by <a href="https://github.com/DestinyDevs">DestinyDevs</a>.<br/>This is a community run wiki and is not offically supported by <a href="https://www.bungie.net">Bungie</a>.</p>
	</div>
</footer>

<script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.2.0/highlight.min.js"></script>
<script src="<?= $root ?>js/main.js<?php echo '?'.filemtime(BASEPATH.'/gh-pages/js/main.js') ?>"></script>
<?php if ($page_name == 'API-Test') {?><script type="text/javascript" src="<?= $root ?>js/api-test.js"></script><?php } ?>
</body>
</html>