json.by_id do
  @reals.each do |real|
    json.set real.id do
      json.partial! 'api/reals/real', real: real
    end
  end
end

json.all_ids do
  json.array! @reals.pluck(:id)
end
