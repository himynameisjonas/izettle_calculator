configure do
  Rack::Mime::MIME_TYPES[".appcache"] = "text/cache-manifest"
end

before do
  if ENV['RACK_ENV'] == "production"
    return redirect("http://kortkostnad.se", 301) unless request.host =~ /kortkostnad.se/
  end
end

get '/' do
  erb :index
end

get '/index.html' do
  redirect "/"
end