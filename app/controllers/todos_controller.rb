class TodosController < ApplicationController
  def create
    @project = Project.find(params[:selected_project])
    @todo = @project.todos.create(params.require(:todo).permit(:text))
    #render plain: params.inspect
    redirect_to projects_path
  end
end
