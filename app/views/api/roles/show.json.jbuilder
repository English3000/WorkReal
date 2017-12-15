json.role do
  json.extract! @role, :id, :user_id, :title, :location, :start_date,
                       :end_date, :industry, :review
  json.project_ids do
    json.array! @role.project_ids.reverse
  end
  json.real_ids do
    json.array! @role.real_ids.reverse #redundancy
  end
end

json.projects do
  @role.projects.each do |project|
    json.set! project.id do
      json.extract! project, :role_id, :project, :location, :start_date,
                             :end_date, :review, :rating
      json.real_ids do
        json.array! project.real_ids.reverse
      end
    end
  end
end
