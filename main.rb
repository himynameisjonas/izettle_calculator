before do
  if env['sinatra.environment'] == "production"
    return redirect("http://kortkostnad.se") unless request.host =~ /izettle.dev/
  end
end
configure do
  Rack::Mime::MIME_TYPES[".appcache"] = "text/cache-manifest"
end

get '/' do
  erb :index
end

get '/index.html' do
  redirect "/"
end