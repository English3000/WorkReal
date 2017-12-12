json.partial! '/api/roles/role', role: @role

json.array! projects do
  @projects.each do |project|
    project.extract! :id, :role_id, :project, :zip_code,
     :start_date, :end_date, :review, :rating
end
