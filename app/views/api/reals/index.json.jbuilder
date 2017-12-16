json.by_id do
  @reals.each do |real|
    json.set! real.id do
      json.partial! 'api/reals/real', real: real
    end
  end
end

json.all_ids do
  json.array! @reals.pluck(:id)
end

json.projects do
  @projects.each do |project|
    json.set! project.id do
        json.extract! project, :id, :role_id, :project, :start_date
    end
  end
end

json.roles do
  @roles.each do |role|
    json.set! role.id do
      json.extract! role, :id, :title, :industry,
      :location, :start_date, :review, :end_date
    end
  end
end
