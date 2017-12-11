@reals.each do |real|
  json.set real.id do
    json.partial! 'api/reals/real', real: real
  end
end
