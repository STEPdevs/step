Step::Application.configure do
  config.cache_classes = false
  config.eager_load = false
  config.consider_all_requests_local       = true
  config.action_controller.perform_caching = false
  config.action_mailer.delivery_method = :smtp
  config.action_mailer.perform_deliveries = true
  config.action_mailer.raise_delivery_errors = true

  config.action_mailer.smtp_settings = {
      #:openssl_verify_mode  => 'none',
      #tls: false,
      #enable_starttls_auto: true,#this is the important stuff!
      #:address        => 'smtp.gmail.com',
      #:port           => 587,
      #:domain         => 'step-test.herokuapp.com',
      #:authentication => :plain,
      #:user_name      => 'thoughtwork.step@gmail.com',
      #:password       => 'thoughtworks'
      :address => "sifymisc01.thoughtworks.com",
      :domain => "thoughtworks,com"
  }
  config.active_support.deprecation = :log
  config.active_record.migration_error = :page_load
  config.assets.debug = true
end
